import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="logo" />

        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/1020848?s=460&v=4"
            alt="teste"
          />
          <div>
            <strong>ahguhauee</strong>
            <p>haeiughaieg</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1232</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1232</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1232</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="2w">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
