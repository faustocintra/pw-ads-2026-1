
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const carsPromise = fetch('https://api.faustocintra.com.br/v2/cars')
 .then(res => res.json())


export default function CarsList() {
    const cars = React.use(carsPromise)
    const columns = [
   {
     field: 'id',
     headerName: 'Cód.',
     width: 90
   },
   {
     field: 'brand',
     headerName: 'Marca/Modelo',
     width: 220,
     renderCell: (params) => `${params.row.brand} ${params.row.model}`
   },
   {
     field: 'color',
     headerName: 'Cor',
     width: 120
   },
   {
     field: 'year_manufacture',
     headerName: 'Ano de fabricação',
     width: 90
   },
   {
     field: 'imported',
     headerName: 'Importado',
     width: 150,
     renderCell: (params) => params.row.imported == 1 ? 'SIM' : ''
   },
   {
     field: 'plates',
     headerName: 'Placas',
     width: 150
   },
   {
     field: 'selling_price',
     headerName: 'Preço de venda',
     width: 220,
     valueFormatter: value => {
       if (value) {
         return Number(value).toLocaleString('pt-BR',{
            style: 'currency',
            currency: 'BRL'
         })
       }
       else return ''
     }
   },
   {
     field: 'selling_date',
     headerName: 'Data de venda',
     width: 150,
     valueFormatter: (value) => {
        if (value) {
          const date = new Date(value)
          return date.toLocaleDateString('pt-BR')
        }
          else return ''
      }
    }
 ]


 return <>
   <Typography variant="h1"gutterBottom>
     Listagem de veículos
   </Typography>
   <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={cars}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      disableRowSelectionOnClick
    />
   </Box>
 </>
}

