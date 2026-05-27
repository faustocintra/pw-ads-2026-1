import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    {
        field: 'brand_model',
        headerName: 'Marca / Modelo',
        width: 280,
        // Usando o próprio Box do MUI para garantir que o Flexbox do DataGrid não quebre o layout
        renderCell: (params) => (
            <Box>
                <strong>{params.row.brand}</strong> {params.row.model}
            </Box>
        )
    },
    {
        field: 'color',
        headerName: 'Cor',
        width: 130
    },
    {
        field: 'year_manufacture',
        headerName: 'Ano Fab.',
        width: 100,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'imported',
        headerName: 'Importado',
        width: 110,
        align: 'center',
        headerAlign: 'center',
        renderCell: (params) => (
            params.value === 1 ? 'SIM' : ''
        )
    },
    {
        field: 'plates',
        headerName: 'Placas',
        width: 130,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'selling_price',
        headerName: 'Preço de Venda',
        width: 160,
        align: 'right',
        headerAlign: 'right',
        // Ajustado para o padrão desestruturado do MUI X mais recente ({ value })
        valueFormatter: (params) => {
            const value = params?.value
            if (value != null) {
                return value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            }
            return ''
        }
    },
    {
        field: 'selling_date',
        headerName: 'Data da Venda',
        width: 140,
        valueFormatter: (params) => {
            const value = params?.value
            if (value != null) {
                const date = new Date(value)
                return date.toLocaleDateString('pt-BR')
            }
            return ''
        }
    }
];

export default function CarsList() {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let active = true

        async function loadCars() {
            try {
                const res = await fetch('https://api.faustocintra.com.br/v2/cars')
                if (!res.ok) {
                    throw new Error('Erro ao buscar dados da API')
                }

                const data = await res.json()
                if (active) {
                    setCars(data)
                }
            } catch (err) {
                if (active) {
                    setError(err)
                }
            } finally {
                if (active) {
                    setLoading(false)
                }
            }
        }

        loadCars()
        return () => {
            active = false
        }
    }, [])

    if (error) {
        return (
            <Typography color="error" variant="h6" sx={{ mt: 4 }}>
                Erro: {error.message}
            </Typography>
        )
    }

    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom>
                Listagem de Veículos
            </Typography>

            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={cars}
                    columns={columns}
                    getRowId={(row) => row.id ?? row._id ?? row.plates ?? `${row.brand}_${row.model}_${row.year_manufacture}`}
                    loading={loading}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    disableRowSelectionOnClick
                />
            </Box>
        </>
    )
}