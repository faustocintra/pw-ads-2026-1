import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// 1. Atualizamos a URL da API para puxar os carros
const carsPromise = fetch('https://api.faustocintra.com.br/v2/cars')
  .then(res => res.json())

export default function CarsList() {

  // 2. Trocamos a variável para cars
  const cars = React.use(carsPromise)

  // 3. Montamos as colunas conforme as exigências do Trabalho 2
  const columns = [
    {
      field: 'brand_model', // Campo virtual
      headerName: 'Marca e Modelo',
      width: 250,
      // Exibindo marca e modelo na mesma coluna
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
      width: 150
    },
    {
      field: 'imported',
      headerName: 'Importado',
      width: 120,
      // Exibindo "SIM" se for 1, ou vazio caso contrário
      renderCell: (params) => (params.row.imported == 1 ? 'SIM' : '')
    },
    {
      field: 'plates',
      headerName: 'Placas',
      width: 120
    },
    {
      field: 'selling_price',
      headerName: 'Preço de venda',
      width: 160,
      // Formatando como moeda (R$)
      valueFormatter: value => {
        if (value) {
          return Number(value).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }
        return ''
      }
    },
    {
      field: 'selling_date',
      headerName: 'Data de venda',
      width: 150,
      // Formatando a data para DD/MM/AAAA
      valueFormatter: value => {
        if (value) {
          const date = new Date(value)
          return date.toLocaleDateString('pt-BR', {
            timeZone: 'UTC' // Adicionado para evitar que a data volte 1 dia pelo fuso horário
          })
        }
        return ''
      }
    }
  ];

  return <>
    <Typography variant="h1" gutterBottom>
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