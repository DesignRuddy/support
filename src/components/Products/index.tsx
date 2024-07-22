import { useState } from 'react';

import * as S from './styled';

type ProductsProps = {
  projects?: any
};

const Products: React.FC<ProductsProps> = ({
  projects
}) => {
  const [selectedTab, setSelectedTab] = useState('자주찾는');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <S.Wrapper>
      <S.Content>
        <S.Tabs>
          {[projects].map((tab) => (
            <S.Tab key={tab} isSelected={selectedTab === tab} onClick={() => handleTabClick(tab)}>
              {tab}
            </S.Tab>
          ))}
        </S.Tabs>

        <S.ServicesGrid>
          {Array.from({ length: 10 }, (_, index) => (
            <S.ServiceCard key={index}>
              <img src="https://via.placeholder.com/50" alt="Service" />
              <p>Service {index + 1}</p>
            </S.ServiceCard>
          ))}
        </S.ServicesGrid>

        <S.ModalButton onClick={openModal}>서비스 전체보기</S.ModalButton>

        <S.Modal>
          <h2>전체 서비스</h2>
          <S.ModalContent>
            {Array.from({ length: 20 }, (_, index) => (
              <S.ServiceCard key={index}>
                <img src="https://via.placeholder.com/50" alt="Service" />
                <p>Service {index + 1}</p>
              </S.ServiceCard>
            ))}
          </S.ModalContent>
          <button onClick={closeModal}>Close</button>
        </S.Modal>
      </S.Content>
    </S.Wrapper >
  );
};

export default Products;
