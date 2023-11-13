import '../../styles/style.scss';

interface PaymentProps {
  icon: string;
  className?: string;
}

export const PaymentIcon = ({ icon, className }: PaymentProps) => {
  return <div className={`card-icon ${icon} ${className}`} />;
};
