import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const carsPromise = fetch('https://api.faustocintra.com.br/v2/cars')
 .then(res => res.json())

function formatDate(value) {
  if (value) {
    const date = new Date(value)
    return date.toLocaleDateString('pt-BR')
  }
  else return ''
}

function formatPrice(value) {
  if (value || value === 0) {
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }
  else return ''
}

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
     width: 300,
     renderCell: params => `${params.row.brand} ${params.row.model}`
   },
   {
     field: 'color',
     headerName: 'Cor',
     width: 140
   },
   {
     field: 'year_manufacture',
     headerName: 'Ano fab.',
     width: 130
   },
   {
     field: 'imported',
     headerName: 'Importado',
     width: 130,
     renderCell: params => Number(params.row.imported) === 1 ? 'SIM' : ''
   },
   {
     field: 'plates',
     headerName: 'Placas',
     width: 130
   },
   {
     field: 'selling_price',
     headerName: 'Preço venda',
     width: 150,
     valueFormatter: formatPrice
   },
   {
     field: 'selling_date',
     headerName: 'Data venda',
     width: 150,
     valueFormatter: formatDate
   }
 ];

 return <>
   <Typography variant="h1">
     Listagem de carros
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
