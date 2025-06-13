import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";

const EntryList = ({ entries, handleView, handleEdit, handleDelete }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Typography sx={{ pt: 2, pl: 2 }} variant="h6">
          Entries
        </Typography>

        <List>
          {entries.map((row, index, original) => (
            <Box key={row.id}>
              <ListItem>
                {/* <Grid container spacing={2}> */}
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="p" component="p">
                      {row.date && dayjs(row.date).format("DD-MM-YYYY")}
                    </Typography>

                    <Box>
                      <IconButton onClick={() => handleView(row)}>
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton onClick={() => handleEdit(row)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(row)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  {/* <Grid size={12}> */}
                  <Typography variant="p" component="p">
                    <Box component="b">{row.title}</Box>
                  </Typography>
                  <Typography variant="p" component="p">
                    {row?.moods?.map((mood) => mood.icon)}
                  </Typography>
                  <Box>
                    {row.tags &&
                      row.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          variant="outlined"
                          onClick={() => console.log()}
                          sx={{ mt: 1, mr: 1 }}
                        />
                      ))}
                  </Box>
                  {/* <ListItemText
                      primary={row.date && dayjs(row.date).format("DD-MM-YYYY")}
                    /> 
                    <ListItemText primary={row.title} />*/}
                  {/* </Grid> */}
                </Box>
                {/* </Grid> */}
              </ListItem>
              {index < original.length - 1 && <Divider component="li" />}
            </Box>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default EntryList;
