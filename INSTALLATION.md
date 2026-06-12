# Kurulum Rehberi

## Ön Koşullar

- .NET 8 SDK
- Node.js 18+
- SQL Server 2019 veya daha yeni
- Docker ve Docker Compose (opsiyonel)

## 1. Lokal Kurulum

### Backend Kurulumu

```bash
# Repository'yi klonla
git clone https://github.com/YusufMaden/OtoparkTakipSistemi.git
cd OtoparkTakipSistemi

# Backend dizinine gir
cd backend/ParkingSystem.API

# Bağımlılıkları yükle
dotnet restore

# Veritabanı migrationlarını çalıştır
dotnet ef database update

# Uygulamayı çalıştır
dotnet run
```

Backend şu adreste çalışacak: `http://localhost:5000`

### Frontend Kurulumu

```bash
# Frontend dizinine gir
cd frontend

# Bağımlılıkları yükle
npm install

# Development sunucusunu başlat
npm start
```

Frontend şu adreste açılacak: `http://localhost:3000`

## 2. Docker ile Kurulum

```bash
# Docker Compose ile tüm servisleri başlat
docker-compose up -d

# Logları görüntüle
docker-compose logs -f

# Servisleri durdur
docker-compose down
```

### Erişim Adresleri
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`
- SQL Server: `localhost:1433`

## 3. Veritabanı Yapılandırması

### SQL Server Bağlantı Ayarları

`appsettings.json` dosyasını düzenle:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=OtoparkTakipSistemi;Trusted_Connection=true;Encrypt=false;"
  }
}
```

### İlk Admin Kullanıcı Oluşturma

SQL Server Management Studio'da çalıştır:

```sql
INSERT INTO Users (Username, Email, PasswordHash, FirstName, LastName, Role, IsActive, CreatedAt)
VALUES (
  'admin',
  'admin@example.com',
  '$2a$11$...',  -- BCrypt hashed password
  'Admin',
  'User',
  'Admin',
  1,
  GETUTCDATE()
)
```

## 4. Çevre Değişkenleri

### Backend (.env)
```
DATABASE_CONNECTION_STRING=Server=localhost;Database=OtoparkTakipSistemi;...
JWT_SECRET_KEY=your-super-secret-key-change-this-in-production
JWT_ISSUER=ParkingSystemAPI
JWT_AUDIENCE=ParkingSystemClient
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

## 5. Testleri Çalıştırma

### Backend Testleri
```bash
cd backend
dotnet test
```

### Frontend Testleri
```bash
cd frontend
npm test
```

## 6. Build İşlemleri

### Backend Release Build
```bash
cd backend/ParkingSystem.API
dotnet publish -c Release -o ../../../publish/backend
```

### Frontend Production Build
```bash
cd frontend
npm run build
```

## Sık Karşılaşılan Sorunlar

### SQL Server Bağlantı Hatası
- SQL Server'in çalıştığını kontrol et
- Bağlantı string'ini kontrol et
- Windows Authentication vs SQL Authentication

### Port Çakışması
```bash
# Windows
netstat -ano | findstr :5000
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :5000
lsof -i :3000
```

### Node Modülü Hatası
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Veritabanı Migration Hatası
```bash
dotnet ef database drop
dotnet ef database update
```

## Desteklenen Tarayıcılar

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performans İyileştirmesi

1. **Caching** - Redis kullanarak API response'larını cache et
2. **Database Indexing** - Sık sorgulanan kolonlara index ekle
3. **Frontend Optimization** - Code splitting ve lazy loading kullan
4. **CDN** - Statik dosyaları CDN'den serve et

## Güvenlik Ayarları

1. **HTTPS** - Üretimde HTTPS kullan
2. **CORS** - Sadece izin verilen origin'leri ekle
3. **Rate Limiting** - API'ye rate limiting ekle
4. **Input Validation** - Tüm kullanıcı girdisini valide et

Detaylı yardım için README.md dosyasına bak.
