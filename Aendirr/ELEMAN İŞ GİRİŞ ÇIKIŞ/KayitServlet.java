import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/kayit")
public class KayitServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String kartNo = request.getParameter("kartNo");
        String isim = request.getParameter("isim");
        String girisSaat = request.getParameter("girisSaat");
        String cikisSaat = request.getParameter("cikisSaat");

        // Burada veritabanına kayıt işlemleri yapılacak (örneğin JDBC kullanarak)
        
        // Örnek olarak çıktıyı ekrana basalım
        PrintWriter out = response.getWriter();
        out.println("Kart Numarası: " + kartNo);
        out.println("İsim: " + isim);
        out.println("Giriş Saati: " + girisSaat);
        out.println("Çıkış Saati: " + cikisSaat);
    }
}
