interface IHomeScreenDataList {
  columnLineStart: string;
  span: string;
  imgSrc: string;
  link: string;
  id: string;
  title: string;
  action: string;
}

const HomeScreenData = (smallDevices: boolean) => {
  const HomeScreenDataList: IHomeScreenDataList[] = [
    {
      columnLineStart: smallDevices ? '1' : '1',
      span: smallDevices ? '1' : '2',
      imgSrc: '/static/img/Anniversary-Sale-Banner.png',
      link: '/',
      id: '1',
      title: '',
      action: 'Click Here',
    },
    {
      columnLineStart: smallDevices ? '1' : '3',
      span: smallDevices ? '1' : '2',
      imgSrc: '/static/img/Anniversary-Sale-Banner.png',
      link: '/',
      id: '2',
      title: 'Home Decor',
      action: 'Shop Now',
    },
    {
      columnLineStart: smallDevices ? '1' : '1',
      span: smallDevices ? '1' : '1',
      imgSrc: '/static/img/beanbag.jpg',
      link: '/',
      id: '3',
      title: 'Table',
      action: 'Shop Now',
    },
    {
      columnLineStart: smallDevices ? '1' : '2',
      span: smallDevices ? '1' : '1',
      imgSrc: '/static/img/beanbag.jpg',
      link: '/',
      id: '4',
      title: 'Chair',
      action: 'Shop Now',
    },
    {
      columnLineStart: smallDevices ? '1' : '3',
      span: smallDevices ? '1' : '1',
      imgSrc: '/static/img/beanbag.jpg',
      link: '/',
      id: '5',
      title: 'Soft Seating',
      action: 'Shop Now',
    },
    {
      columnLineStart: smallDevices ? '1' : '4',
      span: smallDevices ? '1' : '1',
      imgSrc: '/static/img/beanbag.jpg',
      link: '/',
      id: '6',
      title: 'Coffe Table',
      action: 'Shop Now',
    },
    {
      columnLineStart: smallDevices ? '1' : '1',
      span: smallDevices ? '1' : '2',
      imgSrc: '/static/img/sofas_2.jpg',
      link: '/',
      id: '7',
      title: 'Sofas',
      action: 'Shop Now',
    },
    {
      columnLineStart: smallDevices ? '1' : '3',
      span: smallDevices ? '1' : '2',
      imgSrc: '/static/img/sofas_2.jpg',
      link: '/',
      id: '8',
      title: 'Best Selling',
      action: 'Shop Now',
    },
    {
      columnLineStart: smallDevices ? '1' : '1',
      span: smallDevices ? '1' : '2',
      imgSrc: '/static/img/sofas_2.jpg',
      link: '/',
      id: '9',
      title: 'Consoles',
      action: 'Shop Now',
    },
    {
      columnLineStart: smallDevices ? '1' : '3',
      span: smallDevices ? '1' : '2',
      imgSrc: '/static/img/sofas_2.jpg',
      link: '/',
      id: '10',
      title: 'Bed',
      action: 'Shop Now',
    },
  ];

  return HomeScreenDataList;
};

export default HomeScreenData;
