import { StyledPreloader } from './Styles';

const Preloader = () => {
   return (
      <StyledPreloader primary>
         <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </StyledPreloader>
   )
}

export default Preloader;