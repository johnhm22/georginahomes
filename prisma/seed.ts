import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const initialProperties: Prisma.PropertiesCreateInput[] = [
  {
    title: 'Two bed flat, newly decorated',
    slug: 'two-bed-flat',
    address: 'Five Ways, Edgbaston',
    monthly_rent: 1400,
    description:
      'Recently available, lovely two bed flat in well-maintained 1930s period building in central Birmingham. Easy walking distance to city centre, gyms, cinemas, supermarkets etc. Furnished to a high standard',

    // list_date: '2024-08-12T15:00:00.000Z',
    // available_from_date: '2024-08-24T00:00:00.000Z',
    list_date: '12 Aug 2024',
    available_from_date: '24 Aug 2024',
    photos: [
      'https://images.prismic.io/georginahomes/ZrnZC0aF0TcGI2wb_IMG_20210424_142116.jpg?auto=format,compress',
      'https://images.prismic.io/georginahomes/ZrnZCUaF0TcGI2wZ_IMG_20210424_135657.jpg?auto=format,compress',
      'https://images.prismic.io/georginahomes/ZrnZB0aF0TcGI2wY_IMG_20210410_153524_hdr.jpg?auto=format,compress',
      'https://images.prismic.io/georginahomes/ZrnZB0aF0TcGI2wY_IMG_20210410_153524_hdr.jpg?auto=format,compress',
      'https://images.prismic.io/georginahomes/ZrnZB0aF0TcGI2wY_IMG_20210410_153524_hdr.jpg?auto=format,compress'
    ]
  },
  {
    title: 'Two bed in modern apartment block',
    slug: 'two-bed-modern',
    address: 'Edgbaston, Birmingham',
    monthly_rent: 1400,
    description:
      'A two bed well decorated flat. Property is quite new reflected in condition throughout. Kitchen and bathroom clean and modern.',
    list_date: '3 June 2024',
    available_from_date: '20 June 2024',
    photos: [
      'https://images.prismic.io/georginahomes/ZrpINEaF0TcGI3sh_IMG_20230606_130455.jpg?auto=format,compress'
    ]
  },
  {
    title: 'First floor flat in secluded area',
    slug: 'first-floor-flat',
    address: 'Harborne, Birmingham',
    monthly_rent: 950,
    description:
      'An impressive two bedroom flat on the first floor. Partly furnished. Well-equipped kitchen and up-to-date bathroom.',
    list_date: '31 May 2024',
    available_from_date: '10 June 2024'
  }
];

async function main() {
  console.log('Starting seeding....');

  for (const property of initialProperties) {
    const newProperty = await prisma.properties.create({
      data: property
    });
    console.log(`Property created with id: ${newProperty.id}`);
  }

  const newUser = await prisma.users.create({
    data: {
      username: 'monica',
      password: 'password',
      admin: true,
      first_name: 'Monica',
      last_name: 'Abcde'
    }
  });
  console.log(`User created with id: ${newUser.id}`);

  console.log('Seeding complete');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
