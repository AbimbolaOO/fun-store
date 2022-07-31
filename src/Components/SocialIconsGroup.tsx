import IconGroup from './IconGroup';
import VerticalLine from './VerticalLine';
import { Facebook, Linkedin, Twitter, Instagram, Youtube } from './SocialIcons';

interface SocialIG {
  noVerticalLine?: boolean;
}

const SocialIconsGroup: React.FC<SocialIG> = ({ noVerticalLine }) => {
  return (
    <IconGroup>
      {noVerticalLine ? '' : <VerticalLine />}
      <Facebook />
      <Linkedin />
      <Twitter />
      <Instagram />
      <Youtube />
    </IconGroup>
  );
};

export default SocialIconsGroup;
