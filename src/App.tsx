import React, {useEffect, useState} from 'react';
import './App.css';
import {
    Container, FormControl, InputLabel, MenuItem, Select, Table,
    TableBody,
    TableCell, TableContainer, TableHead, TableRow
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getAllUserPage, getLogins, getUserPageById} from "./actions/actions";
import {State, StateType} from "./reducer/Reducer";
import Paper from '@material-ui/core/Paper';

function App() {

    const {userPage, loading, userLogin} = useSelector((state: State): StateType => state);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!userLogin.length) {
            dispatch(getLogins());
        }
    }, [userLogin]);
    const [age, setAge] = useState<string | number>('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as number);
    };
    useEffect(() => {
        if (!age) {
            dispatch(getAllUserPage());
        } else {
            dispatch(getUserPageById(+age));
        }
    }, [age]);

    return (
        <div className="App">
            <Container>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Users</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value="">None</MenuItem>
                        {userLogin.map((Login) => {
                            return (<MenuItem key={Login.id} value={Login.id}>{Login.login}</MenuItem>)
                        })}
                    </Select>
                </FormControl>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">UserId</TableCell>
                                <TableCell align="right">Login</TableCell>
                                <TableCell align="right">Data</TableCell>
                                <TableCell align="right">Page</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userPage.map(({id, login, date, page, usrId}) => (
                                <TableRow key={id}>
                                    <TableCell component="th" scope="row">
                                        {id}
                                    </TableCell>
                                    <TableCell align="right">{usrId}</TableCell>
                                    <TableCell align="right">{login}</TableCell>
                                    <TableCell align="right">{date}</TableCell>
                                    <TableCell align="right">{page}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}

export default App;
