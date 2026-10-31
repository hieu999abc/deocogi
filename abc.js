#!name= Custom Edition
#!desc= Hieu | Tùy chỉnh Video & Caption cá nhân.

[General]

[MITM]
hostname = %APPEND% api.revenuecat.com, firebaseremoteconfig.googleapis.com

[Script]
# 1. Tùy chỉnh Feature, Video 60s & Caption cá nhân
locket_remote = type=http-response, pattern=^https?:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-.*, script-path=https://raw.githubusercontent.com/danghieu2927/dth2927/refs/heads/main/Locket_Unlocked.js, requires-body=true, max-size=524288, timeout=60

# 2. Xóa ETag Header chống dính Cache 
deleteHeader = type=http-request, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers), script-path=http://raw.githubusercontent.com/danghieu2927/dth2927/refs/heads/main/deleteHeader.js, timeout=60

# 3. Kích hoạt & Ngày 02/09/2007
revenuecat = type=http-response, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$), script-path=https://raw.githubusercontent.com/danghieu2927/dth2927/refs/heads/main/locket_th, requires-body=true, max-size=-1, timeout=60
