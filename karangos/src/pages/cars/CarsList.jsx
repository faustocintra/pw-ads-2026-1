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
    field: 'brand_model',
    headerName: 'Marca / Modelo',
    width: 250,
    renderCell: (params) => {
      return `${params.row.brand} ${params.row.model}`
    }
  },
  {
    field: 'color',
    headerName: 'Cor',
    width: 120
  },
  {
    field: 'year_manufacture',
    headerName: 'Ano',
    width: 120
  },
  {
    field: 'imported',
    headerName: 'Importado',
    width: 130,
    renderCell: (params) => {
      return params.row.imported ? 'SIM' : ''
    }
  },
  {
    field: 'plates',
    headerName: 'Placas',
    width: 150
  },
  {
    field: 'selling_price',
    headerName: 'Preço Venda',
    width: 150,
    valueFormatter: value => {
      if(value) {
        return Number(value).toLocaleString(
          'pt-BR',
          {
            style: 'currency',
            currency: 'BRL'
          }
        )
      }
      return ''
    }
  },
  {
    field: 'selling_date',
    headerName: 'Data Venda',
    width: 150,
    valueFormatter: value => {
      if(value) {
        return new Date(value).toLocaleDateString('pt-BR')
      }
      return ''
    }
  }
] 
  return <>
    <Typography variant="h1" gutterBottom>
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