using Microsoft.AspNetCore.Mvc;
using ReceiptApi.Data;
using ReceiptApi.Models;

namespace ReceiptApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReceiptsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly string _receiptsFolderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "receipts");

        // Constructor to inject the DbContext
        public ReceiptsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Receipt>> PostReceipt([FromForm] ReceiptRequest receiptRequest, [FromForm] IFormFile receiptFile)
        {
            // Validate the input receipt data and file
            if (receiptRequest == null || receiptFile == null)
            {
                return BadRequest("Receipt data or file is invalid.");
            }

            // Ensure receipts folder exists
            if (!Directory.Exists(_receiptsFolderPath))
            {
                Directory.CreateDirectory(_receiptsFolderPath);
            }

            // Generate a unique filename for the receipt file
            string fileName = $"{Guid.NewGuid()}_{receiptFile.FileName}";
            string filePath = Path.Combine(_receiptsFolderPath, fileName);

            // Save the file to the server
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await receiptFile.CopyToAsync(fileStream);
            }

            // Create a new Receipt object and save it to the database
            var receipt = new Receipt
            {
                PurchaseDate = receiptRequest.PurchaseDate,
                PurchaseAmount = receiptRequest.PurchaseAmount,
                Description = receiptRequest.Description,
                FilePath = filePath // Store the file path in the database
            };

            _context.Receipts.Add(receipt);
            await _context.SaveChangesAsync();

            // Return the created receipt with the ID
            return CreatedAtAction(nameof(PostReceipt), new { id = receipt.Id }, receipt);
        }
    }
    public class ReceiptRequest
    {
        public DateTime PurchaseDate { get; set; }
        public decimal PurchaseAmount { get; set; }
        public string Description { get; set; } = string.Empty;
    }
}
