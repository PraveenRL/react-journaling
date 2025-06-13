import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import entryService from "../services/entryService";
import EntryTable from "../components/features/EntryTable";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import ViewEntryDialog from "../components/features/ViewEntryDialog";
import EntryList from "../components/features/EntryList";
import { useResponsive } from "../hooks/useResponsive";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [openDeleteDialog, setOpenDeleteDialog] = useState({
    open: false,
    id: null,
  });
  const [openViewDialog, setOpenViewDialog] = useState({
    open: false,
    data: null,
  });
  const { isMobile } = useResponsive();

  useEffect(() => {
    getEntries();
  }, []);

  const getEntries = async () => {
    const data = await entryService.getEntries();
    setEntries(data ?? []);
  };

  const onView = (open, data) => {
    setOpenViewDialog({ open, data });
  };

  const onEdit = (data) => {
    navigate("/addEdit", { state: data });
  };

  const onDelete = async (data) => {
    setOpenDeleteDialog({ open: true, id: data.id });
  };

  const handleDeleteDialogClose = async (flag) => {
    setOpenDeleteDialog({ open: false, id: null });
    if (flag) {
      await entryService.deleteEntry(openDeleteDialog.id);
      await getEntries();
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={12} container sx={{ justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ width: 150 }}
            onClick={() => navigate("/addEdit")}
          >
            Add Entry
          </Button>
        </Grid>
        <Grid size={12}>
          {isMobile ? (
            <EntryList
              entries={entries}
              handleView={(data) => onView(true, data)}
              handleEdit={onEdit}
              handleDelete={onDelete}
            />
          ) : (
            <EntryTable
              entries={entries}
              handleView={(data) => onView(true, data)}
              handleEdit={onEdit}
              handleDelete={onDelete}
            />
          )}
        </Grid>
      </Grid>

      <ConfirmDialog
        key="deleteDialog"
        open={openDeleteDialog.open}
        handleClose={handleDeleteDialogClose}
        title="Delete entry?"
        description="Do you want to delete this entry?"
        okLabel="Delete"
      />

      <ViewEntryDialog
        key="viewDialog"
        open={openViewDialog.open}
        handleClose={() => onView(false, null)}
        onEdit={() => onEdit(openViewDialog.data)}
        entry={openViewDialog.data}
        okLabel="Close"
      />
    </>
  );
};

export default DashboardPage;
