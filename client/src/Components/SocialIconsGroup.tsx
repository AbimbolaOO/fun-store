import IconGroup from './IconGroup';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from './SocialIcons';
import VerticalLine from './VerticalLine';

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

// === interfaces
interface ISocialIconsGroup {
  noVerticalLine?: boolean;
}
