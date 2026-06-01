import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// Alterado para a URL de carros do back-end do professor
const carsPromise = fetch('https://api.faustocintra.com.br/v2/cars')
  .then(res => res.json())

export default function CarsList() {

  // Consumindo a promise de carros usando a mesma estrutura original
  const cars = React.use(carsPromise)

  const columns = [
    {
      field: 'id',
      headerName: 'Cód.',
      width: 90
    },
    {
      field: 'brand_model',
      headerName: 'Marca e Modelo',
      width: 250,
      // renderCell para exibir marca e modelo na mesma coluna
      renderCell: (params) => `${params.row.brand} ${params.row.model}`
    },
    {
      field: 'color',
      headerName: 'Cor',
      width: 120
    },
    {
      field: 'year_manufacture',
      headerName: 'Ano Fabr.',
      width: 140
    },
    {
      field: 'imported',
      headerName: 'Importado',
      width: 120,
      // renderCell para retornar "SIM" se for 1, ou string vazia caso contrário
      renderCell: (params) => (params.row.imported == 1 ? 'SIM' : '')
    },
    {
      field: 'plates',
      headerName: 'Placas',
      width: 120
    },
    {
      field: 'selling_price',
      headerName: 'Preço de Venda',
      width: 180,
      // valueFormatter seguindo a mesma assinatura de parâmetro do arquivo original
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
      headerName: 'Data de Venda',
      width: 150,
      // valueFormatter para formatar data em dia/mês/ano
      valueFormatter: value => {
        if (value) {
          const date = new Date(value)
          return date.toLocaleDateString('pt-BR', {
            timeZone: 'UTC' // Evita que problemas de fuso horário alterem o dia original do JSON
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