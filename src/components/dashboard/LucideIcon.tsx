import React from 'react';
import * as Icons from 'lucide-react';

type IconProps = {
    size?: number;
    color?: string;
    strokeWidth?: number;
    // Add any other props that Lucide icons usually accept.
  };

type DynamicIconProps = {
    icon: React.ComponentType<IconProps>;
    size?: number;
    color?: string;
    // Include any other props you need.
  };


  const LucideIcon: React.FC<DynamicIconProps> = ({ icon: IconComponent, ...props }) => {
    return <IconComponent {...props} />;
  };
  
  export default LucideIcon;