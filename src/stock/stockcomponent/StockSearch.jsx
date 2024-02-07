import styled from "styled-components";

const SearchZone = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110rem;
  height: 10rem;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

const SearchInput = styled.input`
  display: flex;
  position: relative;

  width: 100rem;
  height: 6rem;

  background: #ffffff;
  border-radius: 3rem;
  border: none;

  color: #000000;
  font-size: 2rem;
  padding-left: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 볼륨감을 위한 그림자 추가 */

  &::placeholder {
    color: gray;
    padding-left: 1rem;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 30rem;
    height: 4rem;

    &::placeholder {
      font-size: 1.4rem;
  }
}
`;

const SearchButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 6rem;

  background: var(--mainpurple);
  border-radius: 3rem;
  border: 1px solid transparent; /* 투명한 초기 테두리 */
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 29px;

  color: #ffffff;
  opacity: 0.9; /* 유리 효과를 위한 투명도 조절 */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 볼륨감을 위한 그림자 추가 */

  &:hover {
    cursor: pointer;
    scale: 1.005;
    border: 1px solid rgba(255, 255, 255, 0.2); /* 호버 시 테두리 추가 */
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    font-size: 1.2rem;
  }
`;

const StockSearch = () => {
  return (
    <>
      <SearchZone>
        <SearchInput placeholder="찾고 싶은 주식을 검색하세요"></SearchInput>
        <SearchButton>검색</SearchButton>
      </SearchZone>
    </>
  );
};

export default StockSearch;
