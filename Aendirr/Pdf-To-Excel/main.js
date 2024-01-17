const Excel = require('excel4node');
const PDFDocument = require('pdfkit');
const fs = require('fs');

// Excel dosyasını oluştur
const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');
worksheet.cell(1, 1).string('Hello, PDF!');

// Excel dosyasını kaydet
workbook.write('output.xlsx', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  // PDF dosyasını oluştur
  const pdfDoc = new PDFDocument();
  pdfDoc.pipe(fs.createWriteStream('output.pdf'));

  // Excel dosyasını PDF'e dönüştür
  const excelData = fs.readFileSync('output.xlsx');
  pdfDoc.text(excelData);

  // PDF dosyasını kapat
  pdfDoc.end();

  console.log('Conversion completed. PDF file saved.');
});
