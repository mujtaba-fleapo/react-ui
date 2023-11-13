import { Bag } from './Bag';
import { Block } from './Block';
import { Calendar } from './Calendar';
import { Cards } from './Cards';
import { Chart } from './Chart';
import { Checkbold } from './Checkbold';
import { Checkcircle } from './Checkcircle';
import { ChevronDown } from './ChevronDown';
import { ChevronLeft } from './ChevronLeft';
import { ChevronRight } from './ChevronRight';
import { Circlemoney } from './Circlemoney';
import { Circleplus } from './Circleplus';
import { Clock } from './Clock';
import { Close } from './Close';
import { CloseFilled } from './CloseFilled';
import { Comment } from './Comment';
import { Community } from './Community';
import { Delete } from './Delete';
import { DollarSign } from './DollarSign';
import { Download } from './Download';
import { Email } from './Email';
import { Eye } from './Eye';
import { Eyeslash } from './Eyeslash';
import { Filter } from './Filter';
import { Gear } from './Gear';
import { Gridview } from './Gridview';
import { Heart } from './Heart';
import { Heartfilled } from './Heartfilled';
import { Home } from './Home';
import { HorizontalCircleDots } from './HorizontalCircleDots';
import { Horizontaldots } from './Horizontaldots';
import { Image } from './Image';
import { Info } from './Info';
import { LeftArrow } from './LeftArrow';
import { List } from './List';
import { Live } from './Live';
import { Lock } from './Lock';
import { Media } from './Media';
import { Message } from './Message';
import { Messageblast } from './Messageblast';
import { Minus } from './Minus';
import { Money } from './Money';
import { Morecircle } from './Morecircle';
import { Notification } from './Notification';
import { PillSelected } from './PillSelected';
import { PillUnSelected } from './PillUnSelected';
import { PlayIcon } from './PlayIcon';
import { Plus } from './Plus';
import { Rightarrow } from './Rightarrow';
import { Rotate } from './Rotate';
import { Search } from './Search';
import { Send } from './Send';
import { Subscriber } from './Subscriber';
import { Subscription } from './Subscription';
import { Tableview } from './Tableview';
import { Unlock } from './Unlock';
import { User } from './User';
import { Verticaldots } from './Verticaldots';
import { World } from './World';

export * from './Bag';
export * from './Block';
export * from './Calendar';
export * from './Cards';
export * from './Chart';
export * from './Checkbold';
export * from './Checkcircle';
export * from './ChevronDown';
export * from './ChevronLeft';
export * from './ChevronRight';
export * from './Circlemoney';
export * from './Circleplus';
export * from './Clock';
export * from './Close';
export * from './CloseFilled';
export * from './Comment';
export * from './Community';
export * from './Delete';
export * from './DollarSign';
export * from './Download';
export * from './Email';
export * from './Eye';
export * from './Eyeslash';
export * from './Filter';
export * from './Gear';
export * from './Gridview';
export * from './Heart';
export * from './Heartfilled';
export * from './Home';
export * from './HorizontalCircleDots';
export * from './Horizontaldots';
export * from './Image';
export * from './Info';
export * from './LeftArrow';
export * from './List';
export * from './Live';
export * from './Lock';
export * from './Media';
export * from './Message';
export * from './Messageblast';
export * from './Minus';
export * from './Money';
export * from './Morecircle';
export * from './Notification';
export * from './PaymentIcon';
export * from './PillSelected';
export * from './PillUnSelected';
export * from './PlayIcon';
export * from './Plus';
export * from './Rightarrow';
export * from './Rotate';
export * from './Search';
export * from './Send';
export * from './SliderArrow';
export * from './Subscriber';
export * from './Subscription';
export * from './Tableview';
export * from './Unlock';
export * from './User';
export * from './Verticaldots';
export * from './World';

export type IconType =
  | 'Account'
  | 'Bag'
  | 'Block'
  | 'Calendar'
  | 'Cards'
  | 'Chart'
  | 'Checkbold'
  | 'Checkcircle'
  | 'ChevronDown'
  | 'ChevronLeft'
  | 'ChevronRight'
  | 'Circlemoney'
  | 'Circleplus'
  | 'Clock'
  | 'Close'
  | 'CloseFilled'
  | 'Comment'
  | 'Community'
  | 'Delete'
  | 'DollarSign'
  | 'Download'
  | 'Email'
  | 'Eye'
  | 'Eyeslash'
  | 'Filter'
  | 'Gear'
  | 'Heart'
  | 'Heartfilled'
  | 'Home'
  | 'HorizontalCircleDots'
  | 'Horizontaldots'
  | 'Image'
  | 'Info'
  | 'LeftArrow'
  | 'List'
  | 'Live'
  | 'Lock'
  | 'Media'
  | 'Message'
  | 'Messageblast'
  | 'Minus'
  | 'Money'
  | 'Morecircle'
  | 'Notification'
  | 'PaymentIcon'
  | 'PillSelected'
  | 'PillUnSelected'
  | 'PlayIcon'
  | 'Plus'
  | 'Rightarrow'
  | 'Rotate'
  | 'Search'
  | 'Send'
  | 'SliderArrow'
  | 'Subscriber'
  | 'Subscription'
  | 'Unlock'
  | 'User'
  | 'Verticaldots'
  | 'World'
  | 'Gridview'
  | 'Tableview';

export const Icon: React.FC<{ name: IconType; size: string }> = ({
  name,
  ...props
}) => {
  switch (name) {
    case 'Bag':
      return <Bag {...props} />;
    case 'Block':
      return <Block {...props} />;
    case 'Calendar':
      return <Calendar {...props} />;
    case 'Cards':
      return <Cards {...props} />;
    case 'Chart':
      return <Chart {...props} />;
    case 'Checkbold':
      return <Checkbold {...props} />;
    case 'Checkcircle':
      return <Checkcircle {...props} />;
    case 'ChevronDown':
      return <ChevronDown {...props} />;
    case 'ChevronLeft':
      return <ChevronLeft {...props} />;
    case 'ChevronRight':
      return <ChevronRight {...props} />;
    case 'Circlemoney':
      return <Circlemoney {...props} />;
    case 'Circleplus':
      return <Circleplus {...props} />;
    case 'Clock':
      return <Clock {...props} />;
    case 'Close':
      return <Close {...props} />;
    case 'CloseFilled':
      return <CloseFilled {...props} />;
    case 'Comment':
      return <Comment {...props} />;
    case 'Community':
      return <Community {...props} />;
    case 'Delete':
      return <Delete {...props} />;
    case 'DollarSign':
      return <DollarSign {...props} />;
    case 'Download':
      return <Download {...props} />;
    case 'Email':
      return <Email {...props} />;
    case 'Eye':
      return <Eye {...props} />;
    case 'Eyeslash':
      return <Eyeslash {...props} />;
    case 'Filter':
      return <Filter {...props} />;
    case 'Gear':
      return <Gear {...props} />;
    case 'Heart':
      return <Heart {...props} />;
    case 'Heartfilled':
      return <Heartfilled {...props} />;
    case 'Home':
      return <Home {...props} />;
    case 'HorizontalCircleDots':
      return <HorizontalCircleDots {...props} />;
    case 'Horizontaldots':
      return <Horizontaldots {...props} />;
    case 'Image':
      return <Image {...props} />;
    case 'Info':
      return <Info {...props} />;
    case 'LeftArrow':
      return <LeftArrow {...props} />;
    case 'List':
      return <List {...props} />;
    case 'Live':
      return <Live {...props} />;
    case 'Lock':
      return <Lock {...props} />;
    case 'Media':
      return <Media {...props} />;
    case 'Message':
      return <Message {...props} />;
    case 'Messageblast':
      return <Messageblast {...props} />;
    case 'Minus':
      return <Minus {...props} />;
    case 'Money':
      return <Money {...props} />;
    case 'Morecircle':
      return <Morecircle {...props} />;
    case 'Notification':
      return <Notification {...props} />;
    case 'PillSelected':
      return <PillSelected {...props} />;
    case 'PillUnSelected':
      return <PillUnSelected {...props} />;
    case 'PlayIcon':
      return <PlayIcon {...props} />;
    case 'Plus':
      return <Plus {...props} />;
    case 'Rightarrow':
      return <Rightarrow {...props} />;
    case 'Rotate':
      return <Rotate {...props} />;
    case 'Search':
      return <Search {...props} />;
    case 'Send':
      return <Send {...props} />;
    case 'Subscriber':
      return <Subscriber {...props} />;
    case 'Subscription':
      return <Subscription {...props} />;
    case 'Unlock':
      return <Unlock {...props} />;
    case 'User':
      return <User {...props} />;
    case 'Verticaldots':
      return <Verticaldots {...props} />;
    case 'World':
      return <World {...props} />;
    case 'Gridview':
      return <Gridview {...props} />;
    case 'Tableview':
      return <Tableview {...props} />;
    default:
      return <></>;
  }
};
