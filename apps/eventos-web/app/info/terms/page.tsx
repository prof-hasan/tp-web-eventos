import { cn } from '../../../../../packages/design-system/src/utils';
import { Typograph } from '@repo/design-system/atoms';

const TermsPage = async () => {
    return (
      <section className={cn('space-y-10')}>
        <article className={cn('flex flex-col items-center justify-center space-y-5 bg-red-50 py-8 px-20')}>
            <Typograph>
                Entendemos que seu tempo é precioso. Por isso, destacamos abaixo os pontos mais essenciais para o uso da nossa plataforma. No entanto, recomendamos que você leia o documento completo, certo?
            </Typograph>
            <Typograph>
                A DW Events é uma plataforma que facilita a venda de ingressos, inscrições para eventos, cobrança de contribuições e a gestão de participantes. Todos os eventos publicados são de responsabilidade dos seus organizadores, pois a DW Events não os produz. Os organizadores definem a quantidade e o valor dos ingressos, regras de acesso aos eventos, políticas de reembolso e troca de titularidade, entre outros aspectos.
            </Typograph>
            <Typograph>
                A DW Events não se responsabiliza por ingressos adquiridos fora da sua plataforma.
            </Typograph>
            <Typograph>
                Todas as compras realizadas na plataforma DW Events passam por um processo de análise, seja para conferir os dados preenchidos durante a compra (cartão de crédito) ou para receber a confirmação de pagamento (boleto bancário). Caso haja alguma inconsistência ou o pagamento não seja confirmado, a compra será automaticamente cancelada.
            </Typograph>
            <Typograph>
                A política de troca de titularidade é estabelecida pelo organizador do evento, podendo ou não ser disponibilizada. É responsabilidade do consumidor se informar sobre a política específica do evento de interesse.
            </Typograph>
            <Typograph>
                Caso o participante receba um ingresso por meio de troca de titularidade, é importante saber que o titular da compra pode, a qualquer momento, e desde que autorizado pelo organizador, cancelar a compra ou realizar uma nova troca de titularidade, o que pode impedir o acesso ao evento.
            </Typograph>
            <Typograph>
                A política de reembolso é determinada pelo organizador do evento. É responsabilidade do consumidor se informar sobre a política específica do evento de interesse e, se necessário, entrar em contato com o organizador para solicitar o cancelamento da compra e o reembolso do ingresso.
            </Typograph>
            <Typograph>
                Os ingressos, inscrições ou contribuições adquiridos através da plataforma DW Events serão enviados ao e-mail fornecido assim que o pagamento for aprovado. Também é possível acessá-los no site e no app da DW Events, desde que haja uma conta associada ao mesmo e-mail informado no formulário de compra.
            </Typograph>
            <Typograph>
                Para receber nossas mensagens corretamente, você concorda em verificar as configurações do sistema anti-spam, ou similares, na sua caixa de e-mails. O não recebimento do ingresso no e-mail devido a erros nessas configurações não gerará qualquer expectativa de direito ou indenização.
            </Typograph>
        </article>
      </section>
    );
  };
  export default TermsPage;