import React, { useCallback, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import foodOneSvg from 'assets/comida_1.svg';
import foodTwoSvg from 'assets/comida_2.svg';
import foodTreeSvg from 'assets/comida_3.svg';
import foodFourSvg from 'assets/comida_4.svg';
import serviceSvg from 'assets/bloco_services.svg';
import blogOneSvg from 'assets/blog_image_1.svg';
import blogTwoSvg from 'assets/bloco_image_2.svg';
import blogTreeSvg from 'assets/bloco_image_3.svg';
import blogFourSvg from 'assets/bloco_image_4.svg';
import profileImg from 'assets/mauricio-200.jpg';
import membershipSvg from 'assets/bloco_final_image.svg';

import { useToast } from 'hooks/toast';
import Button from 'components/Button';
import Input from 'components/Input';
import Header from 'components/Header';
import CardFood from 'components/CardFood';
import CardBlog from 'components/CardBlog';
import Carousel from 'components/Carousel';
import Footer from 'components/Footer';

import getValidationErrors from 'utils/getValidationErrors';
import * as S from './styles';

interface DataSearchForm {
  recipes: string;
}

interface DataForm {
  email: string;
}

const Home: React.FC = () => {
  const formSearchRef = useRef<FormHandles>(null);
  const formJoinRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmitSearch = useCallback(
    async (data: DataSearchForm) => {
      try {
        formSearchRef.current?.setErrors({});

        const schema = Yup.object().shape({
          recipes: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          type: 'success',
          title: 'Receita encontrada',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formSearchRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao pesquisar receita.',
          description: 'Erro na pesquisa, tente novamente.',
        });
      }
    },
    [addToast],
  );

  const handleSubmitJoin = useCallback(
    async (data: DataForm) => {
      try {
        formJoinRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Email não possui formato válido')
            .required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          type: 'success',
          title: 'Email enviado',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formJoinRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no envio do email.',
          description: 'Erro no cadastro de email, tente novamente.',
        });
      }
    },
    [addToast],
  );

  return (
    <S.Container>
      <S.ContainerHeader>
        <Header />

        <Form ref={formSearchRef} onSubmit={handleSubmitSearch}>
          <h1>Readdy for Trying a new recipe?</h1>
          <div>
            <Input
              widthContainer={{ marginTop: 0 }}
              name="recipes"
              placeholder="Search healthy recipes"
            />
            <Button type="submit">
              <FiSearch />
            </Button>
          </div>
        </Form>
      </S.ContainerHeader>

      <S.BgSection id="healthy_recipes">
        <S.Recipes>
          <S.RecipesContent>
            <h1>Our Best Recipes</h1>
            <p>
              Far for away, behind the word mountains, far from the countries
              <br />
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </S.RecipesContent>

          <S.RecipesCards>
            <CardFood title="Brocoli Salad  with Bacon" image={foodOneSvg} />
            <CardFood title="Classíc Beef Burgers" image={foodTwoSvg} />
            <CardFood title="Classíc Potato Salad" image={foodTreeSvg} />
            <CardFood title="Cherry Cobbler on the Grill" image={foodFourSvg} />
          </S.RecipesCards>
        </S.Recipes>
      </S.BgSection>

      <S.Service>
        <img src={serviceSvg} alt="the best service ready to serve you" />
        <S.ServiceContent>
          <h1>
            The best service ready
            <br />
            To serve you
          </h1>

          <p>
            Far far way, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>

          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <Button>Know More</Button>
        </S.ServiceContent>
      </S.Service>

      <S.BgSection id="blog">
        <S.Blog>
          <S.BlogContent>
            <h1>Read Our Blog</h1>
            <p>
              Far for away, behind the word mountains, far from the countries
              <br />
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </S.BlogContent>
        </S.Blog>

        <S.BlogContainerCard>
          <Carousel>
            <CardBlog
              image={blogOneSvg}
              imageProfile={profileImg}
              title="Quick-start guide to nuts and seeds"
              name="Kevin Ibrahim"
            />

            <CardBlog
              image={blogTwoSvg}
              imageProfile={profileImg}
              title="Nutritions: Tips for Improving Your Health"
              name="Mike  jackson"
            />

            <CardBlog
              image={blogTreeSvg}
              imageProfile={profileImg}
              title="The top 10 benefits of eating healthy"
              name="Bryan McGregor"
            />

            <CardBlog
              image={blogFourSvg}
              imageProfile={profileImg}
              title="The top 10 benefits of eating healthy"
              name="Bryan McGregor"
            />
          </Carousel>
        </S.BlogContainerCard>
      </S.BgSection>

      <S.Membership id="join">
        <S.MembershipContent>
          <Form onSubmit={handleSubmitJoin} ref={formJoinRef}>
            <h1>
              Join our membership
              <br />
              to get special offer
            </h1>

            <div>
              <Input
                widthContainer={{ marginTop: 0 }}
                name="email"
                placeholder="Enter your email address"
              />
              <Button type="submit">Join</Button>
            </div>
          </Form>
        </S.MembershipContent>
        <img
          src={membershipSvg}
          alt="Join our membership to get special offer"
        />
      </S.Membership>

      <Footer />
    </S.Container>
  );
};

export default Home;
