import React, { useState, useEffect } from 'react';
import { skillsService } from '../services/skills.service.js';
import { 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Typography, 
  Alert,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  Grid
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingSkill, setEditingSkill] = useState(null);
    const [formData, setFormData] = useState({ name: '', category: '', description: '' });

    const loadSkills = async () => {
        try {
            setIsLoading(true);
            const response = await skillsService.getAll();
            setSkills(response.data.data);
            setError(null);
        } catch (error) {
            setError('Error al cargar skills');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const isNameUnique = (name, excludeId = null) => {
        return !skills.some(skill => 
            skill.name.toLowerCase() === name.toLowerCase() && 
            skill._id !== excludeId
        );
    };

    const createSkill = async (skillData) => {
        try {
            if (!isNameUnique(skillData.name)) {
                setError('Ya existe una skill con ese nombre');
                return;
            }

            setIsLoading(true);
            await skillsService.create(skillData);
            loadSkills();
            setError(null);
            setFormData({ name: '', category: '', description: '' });
        } catch (error) {
            setError('Error al crear skill');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const updateSkill = async (skillId, skillData) => {
        try {
            if (!isNameUnique(skillData.name, skillId)) {
                setError('Ya existe una skill con ese nombre');
                return;
            }

            setIsLoading(true);
            await skillsService.update(skillId, skillData);
            loadSkills();
            setError(null);
            setEditingSkill(null);
            setFormData({ name: '', category: '', description: '' });
        } catch (error) {
            setError('Error al actualizar skill');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Iniciar edición de skill
    const startEditing = (skill) => {
        setEditingSkill(skill._id);
        setFormData({
            name: skill.name,
            category: skill.category,
            description: skill.description
        });
    };

    // Cancelar edición
    const cancelEditing = () => {
        setEditingSkill(null);
        setFormData({ name: '', category: '', description: '' });
        setError(null);
    };

    // DELETE - Eliminar skill
    const deleteSkill = async (skillId) => {
        try {
            setIsLoading(true);
            await skillsService.delete(skillId);
            loadSkills();
            setError(null);
        } catch (error) {
            setError('Error al eliminar skill');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingSkill) {
            updateSkill(editingSkill, formData);
        } else {
            createSkill(formData);
        }
    };

    // Manejar cambios en el formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        loadSkills();
    }, []);

    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Skills
            </Typography>
            
            {/* Formulario para crear/editar skill */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {editingSkill ? 'Editar Skill' : 'Crear Nueva Skill'}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="name"
                                    label="Nombre"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="category"
                                    label="Categoría"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="description"
                                    label="Descripción"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    fullWidth
                                    multiline
                                    rows={2}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
                                    {editingSkill ? 'Actualizar Skill' : 'Crear Skill'}
                                </Button>
                                {editingSkill && (
                                    <Button type="button" onClick={cancelEditing} variant="outlined">
                                        Cancelar
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
            
            {/* Lista de skills */}
            {isLoading ? (
                <Box display="flex" justifyContent="center" p={3}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Alert 
                    severity="error" 
                    action={
                        <Button 
                            color="inherit" 
                            size="small" 
                            onClick={() => {
                                setError(null);
                                if (editingSkill) {
                                    cancelEditing();
                                }
                            }}
                        >
                            Regresar
                        </Button>
                    }
                    sx={{ mb: 2 }}
                >
                    {error}
                </Alert>
            ) : skills.length === 0 ? (
                <Typography variant="body1" color="text.secondary" align="center" sx={{ p: 3 }}>
                    No hay skills disponibles
                </Typography>
            ) : (
                <List>
                    {skills.map(skill => (
                        <ListItem 
                            key={skill._id} 
                            component={Card} 
                            sx={{ mb: 1, p: 2 }}
                        >
                            <ListItemText
                                primary={
                                    <Typography variant="h6" component="span">
                                        {skill.name}
                                    </Typography>
                                }
                                secondary={
                                    <Box>
                                        <Typography variant="body2" color="text.secondary" component="span">
                                            <strong>Categoría:</strong> {skill.category}
                                        </Typography>
                                        <br />
                                        <Typography variant="body2" component="span">
                                            {skill.description}
                                        </Typography>
                                    </Box>
                                }
                            />
                            <ListItemSecondaryAction>
                                <IconButton 
                                    edge="end" 
                                    aria-label="editar"
                                    onClick={() => startEditing(skill)}
                                    color="primary"
                                    sx={{ mr: 1 }}
                                >
                                    <Edit />
                                </IconButton>
                                <IconButton 
                                    edge="end" 
                                    aria-label="eliminar"
                                    onClick={() => deleteSkill(skill._id)}
                                    color="error"
                                >
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default Skills;