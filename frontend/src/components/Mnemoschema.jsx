import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { IconButton } from '@mui/material';
import SVGMnemoschema from './SVGMnemoschema';
import ElementOne from './ElementOne';
import ElementTwo from './ElementTwo';
import Pipe from './SVGPipe';
import Scale from './Scale';
import Label from './Label';
import ScaleField from './ScaleField';
import Flap from './Flap';

export default function Mnemoschema() {
    return <main style={{
        position: 'relative',
        height: '855px',
        width: '1540px',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
      }}>
        <div style={{
            height: '100%',
            borderRadius: '10px',
            padding: '20px',
            width: '100%'
        }}>
            <div style={{
                height: '100%',
                borderRadius: '10px',
                display : 'flex',
                gap: '5px',
                flexDirection : 'column',
                width: '100%'
            }}>
                <div style={{
                    minHeight: '40px',
                    borderRadius : '5px',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <IconButton sx={{
                        borderRadius: '5px',
                        backgroundColor: '#FAB82E',
                        height: '30px',
                        width: '30px',
                        marginRight: '20px',
                        marginLeft: '15px',
                        ':hover': {
                            backgroundColor: '#FAB82E',
                            boxShadow: 'none'
                        }
                    }}>
                        <TextSnippetIcon sx={{
                            color : 'white'
                        }}/>
                    </IconButton>
                    <div>Эксгаустер X-172</div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    flexGrow : 1,
                    frexWarp: 'no-warp',
                    borderRadius : '5px',
                    backgroundColor: 'white',
                    width: '100%'
                }}>
                    <SVGMnemoschema/>
                    <Pipe/>

                    {/* Температуры охладителя */}
                    <Label top={240 - 55} left={940}/>
                    <Label top={150 - 55} left={1020}/>
                    <Label top={150 - 55} left={1100}/>
                    <Label top={320 - 55} left={1060}/>

                    {/* Разряжение */}
                    <Label top={345 - 55} left={345}/>
                    {/* Уровень пыли */}
                    <Label top={365 - 55} left={345}/>

                    {/* Токи, Напряжения */}
                    <Label top={444 - 55} left={1105}/>
                    <Label top={464 - 55} left={1105}/>
                    <Label top={484 - 55} left={1105}/>
                    <Label top={504 - 55} left={1105}/>

                    <ElementOne top={590 - 55} left={40}/>
                    <ElementOne top={680 - 55} left={380}/>
                    <ElementOne top={630 - 55} left={1150}/>
                    <ElementOne top={630 - 55} left={810}/>

                    <ElementTwo top={645 - 55} left={650}/>
                    <ElementTwo top={645 - 55} left={510}/>
                    <ElementTwo top={330 - 55} left={500}/>
                    <ElementTwo top={330 - 55} left={650}/>
                    <ElementTwo top={330 - 55} left={650}/>
                    <ElementTwo top={480 - 55} left={40}/>
                    <div style={{
                        position: 'absolute',
                        top: 250,
                        left : 230
                    }}>
                        Температура <br></br> газа, C
                    </div>
                    <Label top={260} left={350}/>

                    <div style={{
                        position: 'absolute',
                        top: 190,
                        left : 700
                    }}>
                        Уровень <br></br> масла, %
                    </div>
                    <Label top={200} left={820}/>
                    
                    <div style={{
                        position: 'absolute',
                        top: 300,
                        left : 1200
                    }}>
                        Давление <br></br> масла, %
                    </div>
                    <Label top={300} left={1320}/>
                    <Flap/>
                </div>
            </div>
        </div>
      </main>
}