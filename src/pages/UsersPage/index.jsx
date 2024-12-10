import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Typography,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  CircularProgress,
} from '@mui/material';
import { Add, FilterList, MoreVert } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
        if (!token) {
          navigate('/login'); // Redirect to login if no token
          return;
        }

        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/accounts/users/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          // Redirect to login if unauthorized
          navigate('/login');
        } else if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleOpenAddUserModal = () => setAddUserModalOpen(true);
  const handleCloseAddUserModal = () => setAddUserModalOpen(false);

  // Filter and sort logic
  const filteredUsers = users
    .filter((user) =>
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'name') {
        return a.first_name.localeCompare(b.first_name);
      } else if (sortOption === 'email') {
        return a.email.localeCompare(b.email);
      } else if (sortOption === 'status') {
        return (a.user_types.length > 0 ? 'Active' : 'Inactive').localeCompare(
          b.user_types.length > 0 ? 'Active' : 'Inactive'
        );
      }
      return 0;
    });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Users
        </Typography>
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleOpenAddUserModal}>
          Add User
        </Button>
      </Grid>

      {/* Filters and Search */}
      <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search Users"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Sort by</InputLabel>
            <Select value={sortOption} onChange={(e) => setSortOption(e.target.value)} label="Sort by">
              <MenuItem value="">None</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="status">Status</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3} container justifyContent="flex-end">
          <IconButton>
            <FilterList />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </Grid>
      </Grid>

      {/* Loading Indicator */}
      {loading ? (
        <CircularProgress />
      ) : (
        /* Users Table */
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{`${user.first_name} ${user.last_name}`}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.user_types.length > 0 ? 'Active' : 'Inactive'}</TableCell>
                    <TableCell>
                      <Button variant="outlined" size="small" sx={{ mr: 1 }}>
                        Edit
                      </Button>
                      <Button variant="outlined" color="error" size="small">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Add User Modal */}
      <Dialog open={addUserModalOpen} onClose={handleCloseAddUserModal}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select label="Status">
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddUserModal} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Add User
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default UsersPage;
