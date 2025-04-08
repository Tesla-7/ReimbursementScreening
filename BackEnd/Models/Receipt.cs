using System;

namespace ReceiptApi.Models
{
    public class Receipt
    {
        public int Id { get; set; }
        public DateTime PurchaseDate { get; set; }
        public decimal PurchaseAmount { get; set; }
        public string Description { get; set; }
        public string FilePath { get; set; }  // Path to where the file is saved, not the file itself
    }
}