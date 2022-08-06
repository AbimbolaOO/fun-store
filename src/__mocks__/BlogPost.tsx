export interface BlogPostable {
  date: string;
  imgSrc: string;
  heading: string;
  articleSample: string;
}

const BlogPost: BlogPostable[] = [
  {
    imgSrc: '/static/img/conference-room.jpg',
    date: 'Dec 27, 2021',
    heading: 'Ground-Breaking Ideas for A Modern Dining Room',
    articleSample:
      'Dining room trends are constantly changing. Check out these ways to help you modernize your Dining room.',
  },
  {
    imgSrc: '/static/img/Tips_for_choosing_morden_furniture_1170x500.jpg',
    date: 'Nov 27, 2021',
    heading: 'Tips for Choosing Modern Furniture Colours',
    articleSample:
      "If you're overwhelmed by the options and not sure how to find the right choice for your furniture, these tips are for you. Go natural, use the sofa as a statement, add some black, consistency and hire a professional.",
  },
  {
    imgSrc: '/static/img/Lshape-sofa.jpg',
    date: 'Oct 27, 2021',
    heading: 'Best ways to arrange furniture in your home: Top Tips & Advice',
    articleSample:
      "Perhaps you've just moved into a new house and you've got a blank canvas to work with, maybe you've been living somewhere for years and you feel like it needs a reset. Either way, there are always easy ways of changing up the look and feel of your home.",
  },
  {
    imgSrc: '/static/img/table-with-monitor.jpg',
    date: 'Aug 27, 2021',
    heading: 'How your remote work space design affects productivity.',
    articleSample:
      'Productivity is the measure of the extent of our potential performance relative to our apparent or real-time performance. A lot of factors are responsible for how good or bad that could be of which your remote office space design is chief among them.',
  },
  {
    imgSrc: '/static/img/fabric.jpg',
    date: 'Dec 27, 2021',
    heading: 'How To Clean Fabrics At Home',
    articleSample:
      'The holiday season is coming up and what better way to celebrate the festivities than to do so on freshly cleaned fabrics. Soon, your home will (hopefully) be full of family, friends and food and you’d want to enjoy that experience in the cleanest and tidiest environment possible.',
  },
  {
    imgSrc: '/static/img/plywood.jpg',
    date: 'Jun 27, 2021',
    heading: 'The Perfect Wood Selection Guide',
    articleSample:
      'Dining room trends are constantly changing. Check out these ways to help you modernize your Dining room.',
  },
];

export default BlogPost;
