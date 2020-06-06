import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import Doctors from '../svg/Doctors';
import VideoCall from '../svg/VideoCall';
import Progress from '../svg/Progress';
import Meditation from '../svg/Meditation';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Psy App</h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Comece a cuidar da sua saúde emocional e encontre os melhores profissionais{' '}
            <b>online.</b>
          </p>
          <p className="mt-8 md:mt-12">
            <AnchorLink className="px-4" href="#features">
              <Button size="lg">Conheça mais</Button>
            </AnchorLink>
          </p>
          {/* <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
        </div>
        <div className="lg:w-1/2">
          <Doctors />
        </div>
      </div>
    </section>
    <br />
    <br />
    <section id="features" className="py-20 lg:pt-32">
      <div className="mx-auto my-12 text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Veja o que você pode fazer</h2>
      </div>
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Consultas Online</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Faça consultas de forma online com os melhores profissionais do Brasil, e com muita
              segurança sobre seus dados.
            </p>
          </div>
        }
        secondarySlot={<VideoCall />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Registre e acompanhe suas emoções
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Cadastre suas emoções ao decorrer do dia e acompanhe seu progresso através do seu
              histórico, que você também pode compartilhá-lo com o profissional escolhido.
            </p>
          </div>
        }
        secondarySlot={<Progress />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Meditação guiada</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Conte com a nossa meditação guiada para equilibrar suas emoções e ajudar no auto
              conhecimento.
            </p>
          </div>
        }
        secondarySlot={<Meditation />}
      />
    </section>
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Nossa plataforma é</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="100%" secondaryText="Segura" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="100%" secondaryText="Intuitiva" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="Zero" secondaryText="Burocracia" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">
          Pessoas que já experimentaram
        </LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="plans" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Conheça nossos planos</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Free</p>
              <p className="mt-4">
                Com esse plano você tem acesso à noticias, meditação guiada e registro de emoções.
                Também poderá pesquisar por profissionais, pagando sua consulta de acordo com o
                preço estabelecido.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Premium</p>
              <p className="mt-4">
                Além das funcionalidades do plano Free, nesse plano você consegue compartilhar suas
                informações do seu diário de emoções com o seu profissional, para melhor análise.
                Além disso, meditações guiadas mais personalizadas.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Empresarial</p>
              <p className="mt-4">
                Plano para empresas, que conta com as funcionalidades do premium e vários relatórios
                para auxiliar a identificar problemas para melhorar o ambiente de trabalho.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Quer mudar de vida?</h3>
      <p className="mt-8 text-xl font-light">
        Se inscreva para ser um dos primeiros a usar essa plataforma que irá mudar a forma como
        cuidamos da nossa saúde emocional!
      </p>
      <p className="mt-8">
        <Button size="xl">Registrar</Button>
      </p>
    </section>
  </Layout>
);
