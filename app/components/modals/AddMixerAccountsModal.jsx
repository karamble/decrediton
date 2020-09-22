import { FormattedMessage as T } from "react-intl";
import { TextInput, PassphraseModalField } from "inputs";
import { PassphraseModal } from "modals";
import { useAddMixerAccountsModal } from "./hooks";

const AddMixerAccountsModal = ({
  mixedAccountName,
  changeAccountName,
  setMixedAccountName,
  setChangeAccountName,
  show,
  ...props
}) => {
  useAddMixerAccountsModal(show, setMixedAccountName, setChangeAccountName);

  return (
    <PassphraseModal {...{ show, ...props }}>
      <PassphraseModalField
        label={
          <T
            id="addMixerAccountModal.mixedAccountName"
            m="Mixed Account Name"
          />
        }>
        <TextInput
          autoFocus
          required
          id="name"
          type="text"
          placeholder="Mixed Account Name"
          value={mixedAccountName}
          onChange={(e) => setMixedAccountName(e.target.value)}
        />
      </PassphraseModalField>
      <PassphraseModalField
        label={
          <T
            id="addMixerAccountModal.changeAccountName"
            m="Change Account Name"
          />
        }>
        <TextInput
          autoFocus
          required
          id="name"
          type="text"
          placeholder="Change Account Name"
          value={changeAccountName}
          onChange={(e) => setChangeAccountName(e.target.value)}
        />
      </PassphraseModalField>
    </PassphraseModal>
  );
};

export default AddMixerAccountsModal;
