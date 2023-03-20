FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["vtouch_games.csproj", "."]
RUN dotnet restore "vtouch_games.csproj"
COPY . .
RUN dotnet build "vtouch_games.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "vtouch_games.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "vtouch_games.dll"]
#ENTRYPOINT ["bin/bash"]