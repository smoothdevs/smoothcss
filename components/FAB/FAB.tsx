import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu as HamburgerMenu } from 'react-icons/gi';

import { FABStyled, FABDropdown, FABElement } from './styles';
import blocks from '../../blocks';

interface FABProps {
  component: string;
}

const FAB: React.FC<FABProps> = ({ component }: FABProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <FABStyled open={open} onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <HamburgerMenu />
      <FABDropdown onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)} open={open}>
        {Object.entries(blocks).map((block) => (
          <FABElement key={block[0]} active={block[0] === component} onClick={() => setOpen(false)}>
            <Link href='/components/[component]' as={`/components/${block[0]}`}>
              {block[1].name}
            </Link>
          </FABElement>
        ))}
      </FABDropdown>
    </FABStyled>
  );
};

export default FAB;
