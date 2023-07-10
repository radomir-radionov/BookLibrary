import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CategoriesList } from 'components';

import { ChevronIcon, NavItem, NavList, NavStyled, NavLinkStyled } from './styles';
import navListData from './data';
import pageRoutes from 'constants/pageRoutes';
import dataTestId from 'constants/dataTestId';

type TProps = {
  visible: boolean;
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type TTest = {
  id: number;
  title: string;
  link: pageRoutes;
  dataTestId: dataTestId;
};

const Nav = ({ visible = false, isBurgerMenuOpen, setIsBurgerMenuOpen }: TProps) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isOpenCategoriesList, setIsOpenCategoriesList] = useState(false);

  const pathStartsWithBooks = location.pathname.startsWith('/books');

  const onNavItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setActiveIndex(+e.currentTarget.id);
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  const onChevronItemClick = () => setIsOpenCategoriesList(!isOpenCategoriesList);

  return (
    <NavStyled $visible={visible}>
      <NavList>
        {navListData.map(({ id, title, link, dataTestId }: TTest) =>
          id === 0 ? (
            <NavItem
              key={id}
              id={`${id}`}
              onClick={onNavItemClick}
              $isActive={activeIndex === id}
              data-test-id={dataTestId}
            >
              <NavLinkStyled to={link} $pathStartsWithBooks={pathStartsWithBooks}>
                {title}
                <ChevronIcon
                  onClick={onChevronItemClick}
                  $isOpen={isOpenCategoriesList}
                  $pathStartsWithBooks={pathStartsWithBooks}
                />
              </NavLinkStyled>
              {activeIndex === 0 && pathStartsWithBooks && (
                <CategoriesList
                  isOpen={isOpenCategoriesList}
                  isBurgerMenuOpen={isBurgerMenuOpen}
                  setIsBurgerMenuOpen={setIsBurgerMenuOpen}
                />
              )}
            </NavItem>
          ) : (
            <NavItem
              key={id}
              id={`${id}`}
              onClick={onNavItemClick}
              $isActive={activeIndex === id}
              data-test-id={dataTestId}
            >
              <NavLinkStyled to={link}>{title}</NavLinkStyled>
            </NavItem>
          )
        )}
      </NavList>
    </NavStyled>
  );
};

export default Nav;
