import { useState } from 'react';
import Link from "next/link";
import Logo from './primitives/logo';
import StickyHeader from './primitives/stickyHeader';
import SearchWrap from './primitives/searchWrap';
import SearchIcon from './primitives/searchIcon';
import { Col, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
import { AiOutlineSearch } from 'react-icons/ai';
const HeaderWrap = () => {
  const [isOpen, setIsOpen ] = useState(false);
  return (
    <StickyHeader>
      <SearchIcon>
        <AiOutlineSearch />
      </SearchIcon>
      
      <Link href="/">
        <Logo href="/">AW</Logo>
      </Link>
    </StickyHeader>
  )
}

export default HeaderWrap;

