cd ../../server

@REM Remove-Item -Recurse -Force -Path .\DatabaseModels\Migrations\
rmdir /s/q .\DatabaseModels\Migrations\
dotnet ef database drop --force --no-build --project .\DatabaseModels\ --startup-project .\SellerServer\
dotnet ef migrations add Init --project .\DatabaseModels\ --startup-project .\SellerServer\
dotnet ef database update --project .\DatabaseModels\ --startup-project .\SellerServer\