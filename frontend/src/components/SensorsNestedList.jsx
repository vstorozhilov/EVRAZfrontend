import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import ListItemSensor from './ListItemSensor';
import ListItemButtonTop from './ListItemButtonTop';
import ListItemButtonNested from './ListItemButtonNested';

export default function SensorsNestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
        <ListItemButtonTop
        topic="Подшипники"
        top_credentials={
            [
                {
                    top_text : '1 ПС',
                    credentials : [
                        ['Т, С', 300, 'sensor_one', ()=>{}],
                        ['Верт, мм/c', 300, 'sensor_one', ()=>{}],
                        ['Гориз, мм/c', 300, 'sensor_one', ()=>{}],
                        ['Ось мм/c', 300, 'sensor_one', ()=>{}]
                    ]
                },
                {
                    top_text : '2 ПС',
                    credentials : [
                        ['Т, С', 300, 'sensor_one', ()=>{}],
                        ['Верт, мм/c', 300, 'sensor_one', ()=>{}],
                        ['Гориз, мм/c', 300, 'sensor_one', ()=>{}],
                        ['Ось мм/c', 300, 'sensor_one', ()=>{}]
                    ]
                },
                {
                    top_text : '7 ПС',
                    credentials : [
                        ['Т, С', 300, 'sensor_one', ()=>{}],
                        ['Верт, мм/c', 300, 'sensor_one', ()=>{}],
                        ['Гориз, мм/c', 300, 'sensor_one', ()=>{}],
                        ['Ось мм/c', 300, 'sensor_one', ()=>{}]
                    ]
                },
                {
                    top_text : '8 ПС',
                    credentials : [
                        ['Т, С', 300, 'sensor_one', ()=>{}],
                        ['Верт, мм/c', 300, 'sensor_one', ()=>{}],
                        ['Гориз, мм/c', 300, 'sensor_one', ()=>{}],
                        ['Ось мм/c', 300, 'sensor_one', ()=>{}]
                    ]
                },
            ]
        }
        />
        <ListItemButtonNested
        top_text="Редуктор"
        credentials={
            [
                ['Т на 3 ПС, С', 300, 'sensor_one', ()=>{}],
                ['Т на 4 ПС, С', 300, 'sensor_one', ()=>{}],
                ['Т на 5 ПС, С', 300, 'sensor_one', ()=>{}],
                ['Т на 6 ПС, С', 300, 'sensor_one', ()=>{}]
            ]
        }
        />
        <ListItemButtonNested
        top_text="Маслобак"
        credentials={
            [
                ['Уровень масла, %', 300, 'sensor_one', ()=>{}],
                ['Давление масла, кг/см2', 300, 'sensor_one', ()=>{}],
            ]
        }
        />
        <ListItemButtonNested
        top_text="Газовый коллектор"
        credentials={
            [
                ['Т газа, С', 300, 'sensor_one', ()=>{}],
                ['Разряжение, мм.в.ст', 300, 'sensor_one', ()=>{}],
                ['Уровень пыли, мг/м3', 300, 'sensor_one', ()=>{}],
            ]
        }
        />
        <ListItemButtonNested
        top_text="Главный привод"
        credentials={
            [
                ['Ток, А', 300, 'sensor_one', ()=>{}],
                ['Ток двигателя, А', 300, 'sensor_one', ()=>{}],
                ['Напряжение ротора, кВт', 300, 'sensor_one', ()=>{}],
                ['Напряжение статора, кВт', 300, 'sensor_one', ()=>{}],
            ]
        }
        />
        <ListItemButtonNested
        top_text="Охладитель"
        credentials={
            [
                ['Т Воды до, С', 300, 'sensor_one', ()=>{}],
                ['Т Воды после, С', 300, 'sensor_one', ()=>{}],
                ['Т Масла до, С', 300, 'sensor_one', ()=>{}],
                ['Т Масла после, С', 300, 'sensor_one', ()=>{}],
            ]
        }
        />

    </List>
  );
}