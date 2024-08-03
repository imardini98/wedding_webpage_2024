import prisma from './index';
import xlsx from 'xlsx';
import path from 'path';


async function main() {
    const __dirname = path.resolve(path.dirname(''));
    const filePath = path.join(__dirname, 'prisma', 'lista_invitados.xlsx');
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data: { [key: string]: any }[] = xlsx.utils.sheet_to_json(sheet, { defval: null, range: 2 });

    for (const item of data) {
        if (item['FAMILIA']) { // Avoid header and empty rows
            await prisma.guest.create({
                data: {
                    name: item['FAMILIA'] || '',
                    guestCode: item['NUMERO'] ? item['NUMERO'].toString() : '',
                    seats: item['CUPO(S)'] || 0,
                },
            });
        }
    }

    console.log('Database has been seeded successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
