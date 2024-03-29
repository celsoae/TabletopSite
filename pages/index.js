import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Title(props) {
  console.log(props.children);
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
      ${Tag}{ 
        color: ${appConfig.theme.colors.neutrals['000']};
        font-size: 36px;
        font-weight: 600;
      }
      `}</style>
    </>
  );
}

//componente react
// function HomePage(){
//   //JSX
//   return (
//       <div>
//         <GlobalStyle /> 
//         <Title tag="h2">Bem vindo ao site!</Title>
//         <h2><a href="https://discord.gg/cXXUUyvd">Discord - Tabletop Pva</a></h2>
//       </div>
//   )
// }
// export default HomePage aaa


export default function PaginaInicial() {
  // const username = 'celsoae';
  const [username, setUsername] = React.useState('');
  //const [colorValue, setColor] = React.useState('100');
  const roteamento = useRouter();

  return (
    <>
      
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[100],
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/10/board-games-collection-shelf.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault(); //previne o comprtamento padrao do form, que é ir para uma url, e se nao tiver nada carrega dnv ele mesmo
              console.log('alguem submeteu o form');
              roteamento.push('/chat');
              //window.location.href = '/chat'; //jeito tradicional do navegador trocar de pagina
              //Modo do React:

            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Title>Bem vindo!</Title>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[100] }}>
              {appConfig.name}
            </Text>

            {/* <input //caixa de login
                type="text"
                value={username}  
                onChange={function (event){
                  console.log('User digitou', event.target.value) //teste pro react saber que foi digitado algo
                  //Onde ta o valor?
                  const valor = event.target.value;
                  //trocar o valor da variavel atraves do React e avisa a quem precisa
                  setUsername(valor);
                }}  
            /> */}

            <TextField
              value={username}
              onChange={function trocarChar(event){
                const value = event.target.value;
                setUsername(value);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}