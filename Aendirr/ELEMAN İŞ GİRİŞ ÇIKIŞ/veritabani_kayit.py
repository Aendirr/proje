import pymysql

def kayit_ekle(kart_no, isim, giris_saat, cikis_saat):
    connection = pymysql.connect(
        host="localhost",
        user="kullanici_adi",
        password="sifre",
        database="calisanlar_db"
    )
    cursor = connection.cursor()

    cursor.execute("INSERT INTO calisanlar (kart_no, isim, giris_saat, cikis_saat) VALUES (%s, %s, %s, %s)",
                   (kart_no, isim, giris_saat, cikis_saat))

    connection.commit()
    connection.close()

# Örnek kullanım
kayit_ekle("123456", "Ahmet", "08:00", "18:00")
