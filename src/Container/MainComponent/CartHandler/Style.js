import styled from "styled-components";

export const Wrapper = styled.div`
  /* max-width: 1200px; */
  margin: 0px auto;
`;

export const CardWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ProductWrapper = styled.div`
  width: 25%;
`;

export const Description = styled.li`
  width: 60%;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;

  text-align: center;
  color: #606060;
  background: #fff;
  font-size: 16px;
  color: #666;
  line-height: 26px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 225px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  text-align: center;
  color: #606060;
  background: #fff;
  padding: 20px;
  font-size: 16px;
  color: #666;
  line-height: 26px;
`;

export const PriceWrapper = styled.div``;

export const Price = styled.div`
  display: inline-block;
  text-decoration: ${(props) => (props.offerprice ? "line-through" : "none")};
`;

export const OfferPrice = styled.div`
  display: ${(props) => (props.offerprice ? "inline-block" : "none")};
  margin-left: 15px;
  background-color: #fcf8e3;
`;

export const Delivery = styled.div`
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color};
  padding: 20px 0px;
  @media (max-width: 375px) {
    padding: 20px;
    margin: 20px 0px;
  }
`;

export const Empty = styled.div`
  background-color: #f6f6f6;
  padding: 80px 0;
  margin-bottom: 55px;
  width: 100% !important;
`;

export const TitleBar = styled.h2`
  font-size: 42px;
  color: #333;
  font-size: 46px;
  font-weight: 600;
  line-height: 42px;
  padding-left: 25px;
`;

export const Table = styled.table`
  border-spacing: 0;
  border-collapse: separate;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 375px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const DataRow = styled.tr`
  font-size: 16px;
  line-height: 27px;
  color: #666;
  height: 50px;
  @media (max-width: 375px) {
    height: 30px;
  }
`;

export const TableDataImage = styled.td`
  height: 200px;
  padding: 10px 0px;
  border-bottom: #e0e0e0 1px solid;
  @media (max-width: 375px) {
    height: 90px;
    width: 100%;
    padding: 5px 0 0;
  }
  @media (max-width: 325px) {
    padding: 5px 0px 0px;
    height: 60px;
  }
`;

export const TableData = styled.td`
  padding: 0px 30px;
  border-bottom: #e0e0e0 1px solid;
  height: 50px;
  vertical-align: middle;
  font-weight: 600;
  display: table-cell;
  @media (max-width: 375px) {
    padding: 0 10px;
  }
  @media (max-width: 320px) {
    padding: 0 5px;
  }
`;

export const TableDataDescription = styled.td`
  padding: 0px 30px;
  border-bottom: #e0e0e0 1px solid;
  height: 50px;
  vertical-align: middle;
  font-weight: 600;
  display: table-cell;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const Header = styled.tr`
  font-size: 16px;
  line-height: 27px;
  color: #666;
`;

export const Title = styled.th`
  border: none;
  background-color: #f6f6f6;
  text-align: left;
  padding: 20px 30px;
  color: #333;
  vertical-align: top;
  font-weight: 600;
  @media (max-width: 375px) {
    padding: 10px;
  }
  @media (max-width: 375px) {
    padding: 5px;
  }
`;

export const TitleDescription = styled.th`
  border: none;
  background-color: #f6f6f6;
  text-align: left;
  padding: 20px 30px;
  color: #333;
  vertical-align: top;
  font-weight: 600;
  @media (max-width: 375px) {
    display: none;
  }
`;
