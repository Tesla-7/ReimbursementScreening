# Receipt Reimbursement Exercise



## How to Run App
The following steps assume you are on either Windows 10 or 11 and have no dependencies installed. If you already have the same versions of the dependencies installed, you may skip those steps. The following also assumes that the front end runs on port 4200 and the back end on port 5248.

1. Clone the repository:
   ```
   git clone https://github.com/Tesla-7/ReimbursementScreening
   ```

2. Install Node.js 22:
   - [Download Node.js](https://nodejs.org/en/download/)

3. Install .NET 9.0:
   - [Download .NET](https://dotnet.microsoft.com/en-us/download)

4. Set up the Front End:
   1. Open PowerShell in `ReimbursementScreening/FrontEnd/src/app/`.
   2. Run the following commands:
      ```
      Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
      npm install -g @angular/cli
      npm install
      ng serve
      ```

5. Set up the Back End:
   1. Open PowerShell in `ReimbursementScreening/BackEnd/`.
   2. Run the following commands:
      ```
      dotnet restore
      dotnet run
      ```

6. Open the application in your browser:
   - Navigate to [http://localhost:4200](http://localhost:4200).


## File System Tree
```
ReimbursementScreening/
├── FrontEnd/
│   ├── .gitignore
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── app/
│   │   │   ├── mainpage/
│   │   │   │   ├── mainpage.component.ts
│   │   │   │   ├── mainpage.component.html
│   │   │   │   ├── mainpage.component.css
│   │   │   ├── app.module.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.component.html
│   │   ├── assets/
│   │   ├── environments/
│   │   │   ├── environment.ts
│   │   │   ├── environment.prod.ts
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── styles.css
│   ├── node_modules/ (ignored)
│   ├── dist/ (ignored)
│   ├── .angular/
│   │   ├── cache/
├── BackEnd/
│   ├── BackEnd.csproj
│   ├── appsettings.json
│   ├── appsettings.Development.json
│   ├── Controllers/
│   │   ├── ReceiptController.cs
│   ├── Models/
│   │   ├── Receipt.cs
│   ├── Services/
│   │   ├── ReceiptService.cs
│   ├── wwwroot/
│   │   ├── receipts/
│   │   │   ├── example.jpg
│   ├── bin/
│   │   ├── Debug/
│   │   │   ├── net9.0/
│   ├── obj/
│   │   ├── Debug/
│   │   │   ├── net9.0/
│   │   │   │   ├── BackEnd.csproj.FileListAbsolute.txt
│   │   │   │   ├── staticwebassets.build.json
│   │   │   │   ├── staticwebassets.development.json
│   │   │   │   ├── staticwebassets.pack.json
│   │   ├── project.assets.json
├── README.md
```

## Stack Details
- **Front End**: Angular 19.2.x
- **Back End**: .NET 9.0
- **Database**: SQLite
- **Other Tools**: Node.js, Angular CLI
