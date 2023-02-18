import { IconButton } from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SimpleChart from './SimpleChart';
import SensorsNestedList from './SensorsNestedList';

export default function Charts() {
    return <main style={{
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
                    display : 'flex', 
                }}>
                    <div style={{
                        minWidth : '360px',
                        height : '100px'
                    }}>
                        <SensorsNestedList/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWarp: 'no-warp',
                        borderRadius : '5px',
                        width: '100%',
                        gap: 10,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        <SimpleChart title='Температура'/>
                        <SimpleChart title='Вибрация'/>
                        <SimpleChart title='Ток'/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWarp: 'no-warp',
                        borderRadius : '5px',
                        width: '100%',
                        gap: 10
                    }}>
                        <SimpleChart title='Давление'/>
                        <SimpleChart title='Разряжение'/>
                        <SimpleChart title='Напряжение'/>
                        <SimpleChart title='Уровень пыли'/>
                    </div>
                </div>
            </div>
        </div>
      </main>
}