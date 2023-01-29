export const languages: { [key: string]: string } = {
  hy: 'Հայ',
  en: 'En',
  ru: 'Ру',
};

type Content = {
  title: string;
  link: string;
};

export const data: { [key: string]: Content[] } = {
  en: [
    {
      title: 'Address',
      link: 'https://www.google.com/maps/place/Shopping+City/@40.162894,44.5044564,18z/data=!4m5!3m4!1s0x406abd9428540b71:0x5db3f83c0475bf80!8m2!3d40.1628391!4d44.5050539',
    },
    {
      title: 'Facebook',
      link: 'https://www.facebook.com/gofashionshowroom/',
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/gofashion_showroom/',
    },
    {
      title: 'WhatsApp',
      link: 'https://wa.me/message/LJYDBGZE7MSRI1',
    },
  ],
  ru: [
    {
      title: 'Наш адрес',
      link: 'https://www.google.com/maps/place/Shopping+City/@40.162894,44.5044564,18z/data=!4m5!3m4!1s0x406abd9428540b71:0x5db3f83c0475bf80!8m2!3d40.1628391!4d44.5050539',
    },
    {
      title: 'Мы в Facebook',
      link: 'https://www.facebook.com/gofashionshowroom/',
    },
    {
      title: 'Мы в Instagram',
      link: 'https://www.instagram.com/gofashion_showroom/',
    },
    {
      title: 'Мы в WhatsApp',
      link: 'https://wa.me/message/LJYDBGZE7MSRI1',
    },
  ],
  hy: [
    {
      title: 'Մեր հասցեն',
      link: 'https://www.google.com/maps/place/Shopping+City/@40.162894,44.5044564,18z/data=!4m5!3m4!1s0x406abd9428540b71:0x5db3f83c0475bf80!8m2!3d40.1628391!4d44.5050539',
    },
    {
      title: 'Մենք Facebook-ում',
      link: 'https://www.facebook.com/gofashionshowroom/',
    },
    {
      title: 'Մենք Instagram-ում',
      link: 'https://www.instagram.com/gofashion_showroom/',
    },
    {
      title: 'Մենք WhatsApp-ում',
      link: 'https://wa.me/message/LJYDBGZE7MSRI1',
    },
  ],
};
