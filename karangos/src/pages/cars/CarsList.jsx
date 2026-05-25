import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function CarsList() {
  const [cars, setCars] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    let isMounted = true

    fetch('https://api.faustocintra.com.br/v2/cars')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro ao carregar veículos: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        if (isMounted) {
          setCars(Array.isArray(data) ? data : [])
          setLoading(false)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  const columns = [
    {
      field: 'id',
      headerName: 'Cód.',
      width: 90,
    },
    {
      field: 'brand',
      headerName: 'Marca/Modelo',
      width: 250,
      renderCell: (params) => {
        const brand = params?.row?.brand || ''
        const model = params?.row?.model || ''
        return `${brand} ${model}`.trim()
      },
    },
    {
      field: 'color',
      headerName: 'Cor',
      width: 120,
    },
    {
      field: 'year_manufacture',
      headerName: 'Ano fab.',
      width: 100,
    },
    {
      field: 'imported',
      headerName: 'Importado',
      width: 100,
      renderCell: (params) => {
        return params?.row?.imported == 1 ? 'SIM' : ''
      },
    },
    {
      field: 'plates',
      headerName: 'Placas',
      width: 120,
    },
    {
      field: 'selling_price',
      headerName: 'Preço de venda',
      width: 150,
      valueFormatter: (value) => {
  if (value) {
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }
  return ''
},
    },
    {
      field: 'selling_date',
      headerName: 'Data de venda',
      width: 130,
      valueFormatter: (value) => {
  if (value) {
    const date = new Date(value)
    return date.toLocaleDateString('pt-BR')
  }
  return ''
},
    },
  ]

  return <>
    <Typography variant="h1" gutterBottom>
      Listagem de veículos
    </Typography>
    {error && (
      <Typography color="error" sx={{ mb: 2 }}>
        {error}
      </Typography>
    )}
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={cars}
        columns={columns}
        loading={loading}
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