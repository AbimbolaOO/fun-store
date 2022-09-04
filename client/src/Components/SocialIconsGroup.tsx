import IconGroup from './IconGroup';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from './SocialIcons';
import VerticalLine from './VerticalLine';

interface ISocialIconsGroup {
  noVerticalLine?: boolean;
}

const SocialIconsGroup: React.FC<ISocialIconsGroup> = ({ noVerticalLine }) => {
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
