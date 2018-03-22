var stats = null;
var npmScripts = process.env.npm_lifecycle_event;
if (npmScripts === "test") {
    //测试环境
    stats = `
                                                                                           
                                                                                       
TTTTTTTTTTTTTTTTTTTTTTTEEEEEEEEEEEEEEEEEEEEEE   SSSSSSSSSSSSSSS TTTTTTTTTTTTTTTTTTTTTTT
T:::::::::::::::::::::TE::::::::::::::::::::E SS:::::::::::::::ST:::::::::::::::::::::T
T:::::::::::::::::::::TE::::::::::::::::::::ES:::::SSSSSS::::::ST:::::::::::::::::::::T
T:::::TT:::::::TT:::::TEE::::::EEEEEEEEE::::ES:::::S     SSSSSSST:::::TT:::::::TT:::::T
TTTTTT  T:::::T  TTTTTT  E:::::E       EEEEEES:::::S            TTTTTT  T:::::T  TTTTTT
        T:::::T          E:::::E             S:::::S                    T:::::T        
        T:::::T          E::::::EEEEEEEEEE    S::::SSSS                 T:::::T        
        T:::::T          E:::::::::::::::E     SS::::::SSSSS            T:::::T        
        T:::::T          E:::::::::::::::E       SSS::::::::SS          T:::::T        
        T:::::T          E::::::EEEEEEEEEE          SSSSSS::::S         T:::::T        
        T:::::T          E:::::E                         S:::::S        T:::::T        
        T:::::T          E:::::E       EEEEEE            S:::::S        T:::::T        
      TT:::::::TT      EE::::::EEEEEEEE:::::ESSSSSSS     S:::::S      TT:::::::TT      
      T:::::::::T      E::::::::::::::::::::ES::::::SSSSSS:::::S      T:::::::::T      
      T:::::::::T      E::::::::::::::::::::ES:::::::::::::::SS       T:::::::::T      
      TTTTTTTTTTT      EEEEEEEEEEEEEEEEEEEEEE SSSSSSSSSSSSSSS         TTTTTTTTTTT      
                                                                                       
                                                                                       
                                                                                       
                                                                                       
    `;
} else if (npmScripts === "build") {
    //生产环境
    stats = `
                                                           
                                                           
    PPPPPPPPPPPPPPPPP   RRRRRRRRRRRRRRRRR        OOOOOOOOO     
    P::::::::::::::::P  R::::::::::::::::R     OO:::::::::OO   
    P::::::PPPPPP:::::P R::::::RRRRRR:::::R  OO:::::::::::::OO 
    PP:::::P     P:::::PRR:::::R     R:::::RO:::::::OOO:::::::O
      P::::P     P:::::P  R::::R     R:::::RO::::::O   O::::::O
      P::::P     P:::::P  R::::R     R:::::RO:::::O     O:::::O
      P::::PPPPPP:::::P   R::::RRRRRR:::::R O:::::O     O:::::O
      P:::::::::::::PP    R:::::::::::::RR  O:::::O     O:::::O
      P::::PPPPPPPPP      R::::RRRRRR:::::R O:::::O     O:::::O
      P::::P              R::::R     R:::::RO:::::O     O:::::O
      P::::P              R::::R     R:::::RO:::::O     O:::::O
      P::::P              R::::R     R:::::RO::::::O   O::::::O
    PP::::::PP          RR:::::R     R:::::RO:::::::OOO:::::::O
    P::::::::P          R::::::R     R:::::R OO:::::::::::::OO 
    P::::::::P          R::::::R     R:::::R   OO:::::::::OO   
    PPPPPPPPPP          RRRRRRRR     RRRRRRR     OOOOOOOOO     
                                                               
                                                               
                                                               
    `;
}

module.exports.stats = stats;