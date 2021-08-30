onst [cep, setCep]= useState([]);
          [bairro, setBairro]= useState('');
          [uf, setUf] = useState('');
          [end, setEnd] = useState('');
          [compl, setCompl] = useState('');
  

    useEffect handlePesquisa (( ) => {
    

      cep = value.replace(/[^0-9]/g,'');

      if ((value?.length !==8) => {
       console.log("Verifique o número digitado");
       else {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res)=> setCep(response.data))
              cep= data.cep;
              bairro= data.bairro;
              end?= data.logradouro;
              cidade= data.localidade;
              uf= data.uf;
              compl?= data.complemento;
        }
      }
    }, [];
  