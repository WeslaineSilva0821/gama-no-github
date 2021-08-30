import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function Formulario(props) {
  
    const [form, setForm]=useState({"carp":"","nome":"", "nasc":"", "id":"", "cel":"","fonf":"", "mail":"", "cep":"", "ende":"", "compl":"", "bairro":"", "cidade":"", "uf":"", "carro": "", "cnh":"", "genero":"", "estCivil":""});

    const [dadosEnd, setDadosEnd] = useState ('')
    
    // function onSubmit(values, actions) {
      // console.log('SUBMIT', values);
    // }

    function handlePesquisa () {
        axios.get(`https://viacep.com.br/ws/${form.cep}/json/`)
        .then (response => {
            const dadosEnde = response.data
            dadosEnd(dadosEnde)
        })
    }

        
    return  (
      <section className="cadastro">
        <h1> {props.title}</h1>
        <label> CARGO PRETENDIDO </label>
        <input type= "text" name= "carp" />
        <p> DADOS PESSOAIS </p>
        <label> Nome Completo </label>
        <input type= "text" name= "nome" />
        <label> Data de Nascimento </label>
        <input type="date"/>
        <label> Identidade de Gênero </label>
        <select>
          <option>Mulher cisgênero</option>
          <option>Mulher transgênero</option>
          <option>Homem cisgênero</option>
          <option>Homem transgênero</option>
          <option>Pessoa não-binária</option>
          <option>Nenhuma das opções listadas</option>
          <option>Prefiro não responder</option>
        </select>
        <label> Estado Civil </label>
        <select>
          <option>Solteiro</option>
          <option>Casado</option>
          <option>Divorciado</option>
          <option>Separado</option>
          <option>União Estável</option>
          <option>Viúvo</option>
        </select>
        <p> CONTATO </p>
        <label> Celular </label>
        <input type= "tel" />
        <label> Fone Fixo </label>
        <input type= "tel" />
        <label> e-mail </label>
        <input type= "e-mail" />
        <p> ENDEREÇO </p>
        <label> CEP </label>
        <input type= "number" />
        <button type="button" key={form.cep} onClick= {handlePesquisa}>Buscar</button>
        <label> Logradouro </label>
        <input type= "text" name="complemento " />
        <label> Nº/Complemento </label>
        <input type= "text" name="fcompl"  />
        <label> Bairro </label>
        <input type= "text" name="bairro" />
        <label> Cidade </label>
        <input type= "text" name="fcidade" value={dadosEnd.localidade} />
        <label> UF </label>
        <input type= "text" name="fuf"  value={dadosEnd.uf}/>
        <p> DOCUMENTOS </p>
         <label> Identidade </label>
         <input type= "text" />
        <label> Possui Veículo </label>
        <select>
          <option>Sim</option>
          <option>Não</option>
        </select>
        <label> Habilitação </label>
        <select>
          <option>Sim</option>
          <option>Não</option>
        </select>
        <div>
        <input type="submit" value="Cadastrar" />
        </div>
      </section>
    )
}