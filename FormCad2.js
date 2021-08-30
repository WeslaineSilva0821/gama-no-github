import React from 'react';
import cadastro from './imgs/Figura2.png';
import CPF from'./ValidaCpf';
import axios from 'axios';
import label from 'label';
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@500&display=swap" rel="stylesheet">

export default function formulario() {
    const [ cpf, setCpf] = useState('');
    
    function handlePesquisa () { 
        document.getElementById(CPF)
    }
  return(
    <section>
        <>
         <img src={cadastro} />
        </>
        <>
          <input className= "cpfInput" placeholder= "CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
          <button onClick={handPesquisa}>Inscreva-se</button>
        </>
        <>
        <span> Identidade </span>
        <input type ="text" />
        </>
        <>
        <span> Nome </span>
        <input type ="text" />
        </>
        <div>
        <span> Cargo Pretendido </span>
        <input type ="text" />
        </div>
        <div>
        <span> Data de Nascimento </span>
        <input type ="text" />
        </div>
        <div>
        <span>Estado Civil </span>
        <input type ="text" />
        </div>
        <div>
        <span> Identidade de Gênero </span>
        <input type ="text" />
        </div>
        <div>
        <span> Possui Veículo </span>
        <input type ="text" />
        </div>
        <div>
        <span> Possui Habilitação </span>
        <input type ="text" />
        </div>
      <script>
    
        function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
        }

        function meu_callback(conteudo) {
          if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            document.getElementById('ibge').value=(conteudo.ibge);
        } //end if.
          else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
          }
        }
        
        function pesquisacep(valor) {

          //Nova variável "cep" somente com dígitos.
          var cep = valor.replace(/\D/g, '');

          //Verifica se campo cep possui valor informado.
          if (cep != "") {

             //Expressão regular para validar o CEP.
              var validacep = /^[0-9]{8}$/;

              //Valida o formato do CEP.
              if(validacep.test(cep)) {

                 //Preenche os campos com "..." enquanto consulta webservice.
                 document.getElementById('rua').value="...";
                 document.getElementById('bairro').value="...";
                 document.getElementById('cidade').value="...";
                 document.getElementById('uf').value="...";
                 
                  //Cria um elemento javascript.
                 var script = document.createElement('script');

                  //Sincroniza com o callback.
                    script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                  //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

              } //end if.
              else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
              }
          } //end if.
          else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
          }
        };

      </script>

      <form method="get" action=".">
        <label>Cep:
        <input name="cep" type="text" id="cep" value="" size="10" maxlength="9"
               onblur="pesquisacep(this.value);" /></label><br />
        <label>Rua:
        <input name="rua" type="text" id="rua" size="60" /></label><br />
        <label>Bairro:
        <input name="bairro" type="text" id="bairro" size="40" /></label><br />
        <label>Cidade:
        <input name="cidade" type="text" id="cidade" size="40" /></label><br />
        <label>Estado:
        <input name="uf" type="text" id="uf" size="2" /></label><br />
      </form>
    </section>
  )
}