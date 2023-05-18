import * as React from "react";
import styled from "./dashboardPage.module.scss";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { AccountBox, CircleTwoTone, Home } from "@mui/icons-material";

const columns = [
	{ id: "name", label: "Name", minWidth: 170 },
	{ id: "code", label: "ISO\u00a0Code", minWidth: 100 },
	{
		id: "population",
		label: "Population",
		minWidth: 170,
		align: "right",
		format: (value) => value.toLocaleString("en-US"),
	},
	{
		id: "size",
		label: "Size\u00a0(km\u00b2)",
		minWidth: 170,
		align: "right",
		format: (value) => value.toLocaleString("en-US"),
	},
	{
		id: "density",
		label: "Density",
		minWidth: 170,
		align: "right",
		format: (value) => value.toFixed(2),
	},
];

function createData(name, code, population, size) {
	const density = population / size;
	return { name, code, population, size, density };
}

const rows = [
	createData("India", "IN", 1324171354, 3287263),
	createData("China", "CN", 1403500365, 9596961),
	createData("Italy", "IT", 60483973, 301340),
	createData("United States", "US", 327167434, 9833520),
	createData("Canada", "CA", 37602103, 9984670),
	createData("Australia", "AU", 25475400, 7692024),
	createData("Germany", "DE", 83019200, 357578),
	createData("Ireland", "IE", 4857000, 70273),
	createData("Mexico", "MX", 126577691, 1972550),
	createData("Japan", "JP", 126317000, 377973),
	createData("France", "FR", 67022000, 640679),
	createData("United Kingdom", "GB", 67545757, 242495),
	createData("Russia", "RU", 146793744, 17098246),
	createData("Nigeria", "NG", 200962417, 923768),
	createData("Brazil", "BR", 210147125, 8515767),
];

export default function DashboardPage() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	return (
		<>
			<div className={styled.dashboardPage}>
				<div className={styled.dashboardContainer}>
					<div className={styled.dashboardContentLeft}>
						<div className={styled.accountUser}>
							<AccountBox
								sx={{ fontSize: "8em", width: "100%" }}
								className={styled.accountUserImg}
							/>
							<h1 className={styled.accountUserName}>Nabil</h1>
						</div>
						<div className={styled.menuDashboard}>
							<h1 className={styled.menuDashboardTittle}>Menu</h1>
							<a className={styled.menuDashboardOption} href="/">
								Barang
							</a>
							<a className={styled.menuDashboardOption} href="/">
								Suplier
							</a>
						</div>
						<div className={styled.statusUser}>
							<h1 className={styled.menuDashboardTittle}>
								Online <CircleTwoTone />
							</h1>
							<h3>Hari Online:</h3>
							<h3>Waktu Online:</h3>
						</div>
					</div>
					<div className={styled.dashboardContentRight}>
						<h1 className={styled.dashboardContentTittle}>Dashboard</h1>
						<div className={styled.dashboardContentExt}>
							<h1 className={styled.dashboardContentExtTittle}>Barang</h1>
							<button className={styled.buttonItem}>Tambah Barang</button>
						</div>
						<div className={styled.tableDashboard}>
							<Paper sx={{ width: "100%" }}>
								<TableContainer sx={{ maxHeight: 440 }}>
									<Table stickyHeader aria-label="sticky table">
										<TableHead>
											<TableRow>
												<TableCell align="center" colSpan={2}>
													Country
												</TableCell>
												<TableCell align="center" colSpan={3}>
													Details
												</TableCell>
											</TableRow>
											<TableRow>
												{columns.map((column) => (
													<TableCell
														key={column.id}
														align={column.align}
														style={{ top: 57, minWidth: column.minWidth }}>
														{column.label}
													</TableCell>
												))}
											</TableRow>
										</TableHead>
										<TableBody>
											{rows
												.slice(
													page * rowsPerPage,
													page * rowsPerPage + rowsPerPage
												)
												.map((row) => {
													return (
														<TableRow
															hover
															role="checkbox"
															tabIndex={-1}
															key={row.code}>
															{columns.map((column) => {
																const value = row[column.id];
																return (
																	<TableCell
																		key={column.id}
																		align={column.align}>
																		{column.format && typeof value === "number"
																			? column.format(value)
																			: value}
																	</TableCell>
																);
															})}
														</TableRow>
													);
												})}
										</TableBody>
									</Table>
								</TableContainer>
								<TablePagination
									rowsPerPageOptions={[10, 25, 100]}
									component="div"
									count={rows.length}
									rowsPerPage={rowsPerPage}
									page={page}
									onPageChange={handleChangePage}
									onRowsPerPageChange={handleChangeRowsPerPage}
								/>
							</Paper>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
