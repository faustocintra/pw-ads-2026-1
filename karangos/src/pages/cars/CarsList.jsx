import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// 1. Configurações estáveis ficam FORA do componente para evitar recriação na memória
const carsPromise = fetch('https://api.faustocintra.com.br/v2/cars')
    .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar dados da API');
        return res.json();
    });

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
        valueFormatter: ({ value }) => {
            if (value) {
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
        valueFormatter: ({ value }) => {
            if (value) {
                const date = new Date(value)
                return date.toLocaleDateString('pt-BR')
            }
            return ''
        }
    }
];

export default function CarsList() {
    // 2. Consome a Promise estável global
    const cars = React.use(carsPromise)

    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom>
                Listagem de Veículos
            </Typography>

            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={cars}
                    columns={columns}
                    // Caso sua API use outra chave primária (como _id), descomente a linha abaixo:
                    // getRowId={(row) => row._id} 
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